const express = require("express");

const app = express();
app.use(express.json());

let students = ["Pragyan", "Rahul", "Aman"];

// CREATE
app.post("/students", (req, res) => {
    const { name } = req.body;

    students.push(name);

    res.send("Student Added");
});

// READ
app.get("/students", (req, res) => {
    res.json(students);
});

// UPDATE
app.put("/students/:index", (req, res) => {
    const index = req.params.index;
    const { name } = req.body;

    students[index] = name;

    res.send("Student Updated");
});

// DELETE
app.delete("/students/:index", (req, res) => {
    const index = req.params.index;

    students.splice(index, 1);

    res.send("Student Deleted");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});