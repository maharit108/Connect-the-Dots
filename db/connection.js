const mongoose = require("mongoose");

let MONGODB_URI = process.env.PROD_MONGODB || "";

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDb"))
  .catch((e) => console.log("Connection error", e.message));

module.exports = mongoose.connection;
