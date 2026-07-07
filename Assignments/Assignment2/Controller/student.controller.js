const students = require("../models/student.model");

// CREATE
const createStudent = (req, res) => {
    students.push(req.body);
    res.send("Student Added");
};

// READ
const getStudents = (req, res) => {
    res.json(students);
};

// UPDATE
const updateStudent = (req, res) => {
    const index = req.params.index;

    students[index] = {
        ...students[index],
        ...req.body
    };

    res.send("Student Updated");
};

// DELETE
const deleteStudent = (req, res) => {
    const index = req.params.index;

    students.splice(index, 1);

    res.send("Student Deleted");
};

module.exports = {
    createStudent,
    getStudents,
    updateStudent,
    deleteStudent
};