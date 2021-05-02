const Tutor = require("../models/tutor");

const getTutors = async (req, res) => {
  try {
    const tutors = await Tutor.find();
    res.json(tutors);
  } catch (errror) {
    res.status(500).json({ error: error.message });
  }
};

const getTutor = async (req, res) => {
  try {
    const { id } = req.params;
    const tutor = await Tutor.findById(id);
    if (tutor) {
      res.json(tutor);
    }
    res.status(400).json({ message: "Tutor not found!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getTutors,
  getTutor,
};
