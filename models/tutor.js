const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Tutor = new Schema(
  {
    name: { type: String, required: true },
    avatar: { type: String, required: false },
    education: { type: String, required: true }, // proof of teaching ability
    description: { type: String, required: false },
    backgroundCheck: { type: Boolean, required: true }, // crimianl background check as part of being a sponsored tutor
    employeer: {type: String, required: true}, // small business to possibly be advertiesd and proof tutor is a worker
    email: {type: String, required: true}, // to make contact
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("tutors", Tutor);
