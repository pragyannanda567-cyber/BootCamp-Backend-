import User from "../Models/User.js";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt";

const signup = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Validation
        if (!name || !email || !password || !role) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User already exists with this email."
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await User.create({
            name,
            email,
            role,
            password: hashedPassword
        });

        // Remove password from response
        const newUser = user.toObject();
        delete newUser.password;

        return res.status(201).json({
            success: true,
            message: "User created successfully.",
            user: newUser
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal server error.",
            error: error.message
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required."
            });
        }

        // Find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found."
            });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid password."
            });
        }

        // Generate JWT Token
        const token = jsonwebtoken.sign(
            { userId: user._id },
            process.env.JWT_SECRET || "studentKey",
            { expiresIn: "3d" }
        );

        // Remove password from response
        const loggedInUser = user.toObject();
        delete loggedInUser.password;

        // Send Cookie
        return res
            .cookie("tokenCookie", token, {
                httpOnly: true,
                maxAge: 3 * 24 * 60 * 60 * 1000
            })
            .status(200)
            .json({
                success: true,
                message: "Login successful.",
                token,
                user: loggedInUser
            });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Failed to login.",
            error: error.message
        });
    }
};

export { signup, login };