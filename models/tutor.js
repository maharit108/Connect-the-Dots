const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Tutor = new Schema(
  {
    name: { type: String, required: true },
    photo: { type: String, required: false },
    brief: { type: String, required: false },
    grade: { type: String, required: true },
    subject: {type: String, required: true}
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("tutors", Tutor);
