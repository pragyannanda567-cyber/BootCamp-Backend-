import jwt from "jsonwebtoken";

const auth = (req, res, next) => {

    try {

        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: "Login Required"
            });
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, "studentKey");

        req.user = decoded;

        next();

    } catch (error) {

        return res.status(401).json({
            success: false,
            message: "Invalid Token"
        });

    }

}

export default auth;