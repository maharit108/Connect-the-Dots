const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Student = new Schema(
  {
    studentName: { type: String, required: true }, // john smith
    gradeLevel: { type: String, required: true }, // k-12
    subject: { type: Array, required: true }, // math, science, english
    parentName: { type: String, requuired: true },
    parentEmail: { type: String, required: true }, // contact informtion for students parents to make contact
    rel: { type: String, required: true },
    respons: { type: String, required: true },
    effort: { type: String, required: true },
    atten: { type: String, required: true },
    conf: { type: String, required: true },
    list: { type: String, required: true },
    org: { type: String, required: true },
    resp: { type: String, required: true },
    comments: { type: String, required: true },
  },
  {
    timestamps: true, // created at timestamp to show how long student has been seeking help or been recommended for help
  }
);

module.exports = mongoose.model("students", Student);
