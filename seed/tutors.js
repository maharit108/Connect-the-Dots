const { Schema } = require("mongoose");
const db = require("../db/connection");
const Tutor = require("../models/tutor");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const tutors = [{}];

  await Tutor.deleteMany();
  await Tutor.insertMany(tutors);
  conseole.log("Tutors Created");
};

const run = async () => {
  await main();
  db.close();
};

run();
