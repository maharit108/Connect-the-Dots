const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Tutor = new Schema(
  {
    name: { type: String, required: true },
    avatar: { type: String, required: false },
    education: { type: String, required: true },
    description: { type: String, required: true },
    backgroundCheck: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("tutors", Tutor);
