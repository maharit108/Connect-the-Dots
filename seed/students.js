const { Schema } = require("mongoose");
const db = require("../db/connection");
const Student = require("../models/student");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const students = [
    {
      studentName: "Laurence Price",
      gradeLevel: "5",
      subject: ["Math"],
      parentName: "Lauren Price",
      parentEmail: "laurenprice@gmail.com",
      rel: "8",
      respons: "5",
      effort: "5",
      atten: "7",
      conf: "2",
      list: "8",
      org: "7",
      resp: "7",
      comments:
        "The kid has heart and is willing to do the work, but gets knocked down really easily when he doesn't get an answer right and puts him off track.",
    },
    {
      studentName: "John Doe",
      gradeLevel: "11",
      subject: ["History"],
      parentName: "Jane Doe",
      parentEmail: "janedoe@gmail.com",
      rel: "1",
      respons: "7",
      effort: "10",
      atten: "4",
      conf: "2",
      list: "6",
      org: "5",
      resp: "7",
      comments:
        "The kid has heart and is willing to do the work, but gets knocked down really easily when he doesn't get an answer right and puts him off track.",
    },
    {
      studentName: "Ryan Glassburn",
      gradeLevel: "8",
      subject: ["English"],
      parentName: "Bob Glassburn",
      parentEmail: "Bobsburners@gmail.com",
      rel: "8",
      respons: "5",
      effort: "5",
      atten: "7",
      conf: "2",
      list: "8",
      org: "7",
      resp: "7",
      comments:
        "The kid has heart and is willing to do the work, but gets knocked down really easily when he doesn't get an answer right and puts him off track.",
    },
    
  ];

  await Student.deleteMany();
  await Student.insertMany(students);
  console.log("Students Created");
};

const run = async () => {
  await main();
  db.close();
};

run();

// create and seed data
// create questions/answers/user(schoolrep) models/routes/schema/controllers
// add auth for login/signup and logout
// apiConfig on frontend.
