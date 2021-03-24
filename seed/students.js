const { Schema } = require('mongoose')
const db = require('../db/connection')
const Student = require('../models/students')

db.on('error',console.error.bind(console, 'MongoDB connection error:'))

const main = async() => {
  const students = [
    {

    }
  ]

  await Student.deleteMany();
  await Student.insertMany(students);
  conseole.log('# Created');
}

const run = async () => {
  await main();
  db.close()
};

run();