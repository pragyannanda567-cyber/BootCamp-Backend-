import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {

    try {

        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token Missing"
            });
        }

        const decoded = jwt.verify(token, "libraryproject123");

        req.user = decoded;

        next();

    } catch (error) {

        return res.status(401).json({
            success: false,
            message: "Invalid Token"
        });

    }

};

export const isAdmin = (req, res, next) => {

    if (req.user.role !== "Admin") {

        return res.status(403).json({
            success: false,
            message: "Access Denied. Admin Only."
        });

    }

    next();

};

export const isStudent = (req, res, next) => {

    if (req.user.role !== "Student") {

        return res.status(403).json({
            success: false,
            message: "Access Denied. Student Only."
        });

    }

    next();

};