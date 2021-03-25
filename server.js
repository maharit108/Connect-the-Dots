const express = require("express")
const cors = require("cors")
const mongoose = require('mongoose')

const dotenv = require('dotenv')

// Matt
const app = express()

const logger = require("morgan")
app.use(logger("dev"))
// app.use("/api", productRoutes)
app.use(express.static('public'))

// Han
dotenv.config()

const db = require('./db/db')

mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

// require route files
const userRoutes = require('./routes/users')
// require middleware
const errorHandler = require('./lib/error_handler')
const requestLogger = require('./lib/request_logger')

// const db = require('./db/connection')

// require configured passport authentication middleware
const auth = require('./lib/auth')

const serverDevPort = 4741
const clientDevPort = 3000

// db.on("error", console.error.bind(console, "MongoDB connection error"))


app.use(cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:${clientDevPort}` }))

const PORT = process.env.PORT || serverDevPort

// register passport authentication middleware
app.use(auth)

// add `express.json` middleware which will parse JSON requests into
// JS objects before they reach the route files.
app.use(express.json())

// this parses requests sent by `$.ajax`, which use a different content type
app.use(express.urlencoded({ extended: true }))

// log each request as it comes in for debugging
app.use(requestLogger)

// register route files
app.use(userRoutes)

// register error handling middleware
app.use(errorHandler)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

module.exports = app
