import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.use(authRoutes);
app.use(bookRoutes);

app.get("/", (req, res) => {
    res.send("Library Management Backend Running...");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});