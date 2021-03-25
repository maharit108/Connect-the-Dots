const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const studentRoutes = require("./routes/students");
const tutorRoutes = require("./routes/tutors");
const db = require("./db/connection"); // to rename to stop conflicts
const dotenv = require("dotenv");

// Matt
const app = express();

app.use(logger("dev"));
app.use(express.static("public")); // might be removable?
app.use(cors());
app.use(bodyParser.json());
app.use("/api", studentRoutes);
app.use("/api", tutorRoutes);

// Han
dotenv.config();

// const db = require('./db/db') // to rename to stop conflicts

// require route files
const userRoutes = require("./routes/users");
// require middleware
// const errorHandler = require('./lib/error_handler')
// const requestLogger = require('./lib/request_logger')

// require configured passport authentication middleware
const auth = require("./lib/auth");

db.on("error", console.error.bind(console, "MongoDB connection error"));

const PORT = process.env.PORT || serverDevPort;

// register passport authentication middleware
app.use(auth);

// add `express.json` middleware which will parse JSON requests into
// JS objects before they reach the route files.
app.use(express.json());

// this parses requests sent by `$.ajax`, which use a different content type
app.use(express.urlencoded({ extended: true }));

// register route files
app.use(userRoutes);

// register error handling middleware
// app.use(errorHandler)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

module.exports = app;
