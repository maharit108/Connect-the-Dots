const db = require("../db/connection");
const Student = require("../models/student");

db.on("error", console.error.bind(console, "MongoDB connection error"));

const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (errror) {
    res.status(500).json({ error: error.message });
  }
};

const getStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    if (student) {
      res.json(student);
    }
    res.status(400).json({ message: "Student not found!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createStudent = async (req, res) => {
  try {
    const student = await Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const updateStudent = async (req, res) => {
  const { id } = req.params;
  await Student.findByIdAndUpdate(
    id,
    req.body,
    { new: true },
    (error, student) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      if (!student) {
        return res.status(404).json({ message: "Student not found!" });
      }
      res.status(200).json(student);
    }
  );
};

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Student.findByIdAndDelete(id);
    if (deleted) {
      res.status(200).send("Student deleted");
    }
    throw new Error("Student not found!");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};
