import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// ====================== SIGNUP ======================

export const signup = async (req, res) => {

    try {

        const { name, email, password, role } = req.body;

        // Check if all fields are present
        if (!name || !email || !password || !role) {
            return res.status(400).json({
                success: false,
                message: "Please fill all the fields"
            });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        // Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create User
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role
        });

        return res.status(201).json({
            success: true,
            message: "User Registered Successfully",
            user
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }

};

// ====================== LOGIN ======================

export const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        // Check if all fields are provided
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill all the fields"
            });
        }

        // Find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid Password"
            });
        }

        // Generate JWT Token
        const token = jwt.sign(
            {
                id: user._id,
                role: user.role
            },
            "libraryproject123",
            {
                expiresIn: "1d"
            }
        );

        return res.status(200).json({
            success: true,
            message: "Login Successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }

};