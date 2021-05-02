const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")

const bodyParser = require("body-parser");
const logger = require("morgan");

const studentRoutes = require("./routes/students");
const tutorRoutes = require("./routes/tutors");
const userRoutes = require("./routes/users");

const db = require("./db/db");
const dotenv = require("dotenv");

const serverDevPort = 4741
const clientDevPort = 3000
mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})

const app = express();

app.use(cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:${clientDevPort}` }))

const port = process.env.PORT || serverDevPort

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/api", studentRoutes);
app.use("/api", tutorRoutes);
app.use(userRoutes);


app.listen(port, () => console.log(`Listening on port: ${port}`));

module.exports = app;
