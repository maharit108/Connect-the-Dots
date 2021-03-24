const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Student = new Schema(
  {
    name: { type: String, required: true },
    avatar: { type: String, required: false },
    gradeLevel: { type: String, required: true },
    subject: {type: Array, required: true},
    description: { type: String, required: true },
    consent: { type: Boolean, required: true },
    parentEmail: { type: String, required: true },
    answers: { type}
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("students", Student);