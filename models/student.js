const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Student = new Schema(
  {
    name: { type: String, required: true }, // john smith
    avatar: { type: String, required: false }, 
    gradeLevel: { type: String, required: true }, // k-12
    subject: { type: Array, required: true }, // math, science, english
    description: { type: String, required: true },
    consent: { type: Boolean, required: true }, // parental consent to share info on student
    parentEmail: { type: String, required: true }, // contact informtion for students parents to make contact
    sponsorID: { type: String, required: true }, // sponsor id would come from logged in user account to tie student to user account.
    answers: {
      // potentially nest answers in schema
    },
  },
  {
    timestamps: true, // created at timestamp to show how long student has been seeking help or been recommended for help
  }
);

module.exports = mongoose.model("students", Student);
