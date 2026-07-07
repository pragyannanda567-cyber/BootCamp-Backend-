const express = require("express");

const connectDB = require("./Database/db");
const studentRoutes = require("./Routes/route");

const app = express();

connectDB();

app.use(express.json());

app.use("/students", studentRoutes);

app.get("/", (req, res) => {
    res.send("Student CRUD API is Running");
});

app.listen(3000, () => {
    console.log("Server running on Port 3000");
});