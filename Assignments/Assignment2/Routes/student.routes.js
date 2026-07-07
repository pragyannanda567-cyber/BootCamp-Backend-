const express = require("express");

const {
    createStudent,
    getStudents,
    updateStudent,
    deleteStudent
} = require("../controllers/student.controller");

const router = express.Router();

router.post("/", createStudent);

router.get("/", getStudents);

router.put("/:index", updateStudent);

router.delete("/:index", deleteStudent);

module.exports = router;