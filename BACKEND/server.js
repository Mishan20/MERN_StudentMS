const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemon = require("nodemon");
const app = express();

dotenv.config();
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(express.json()); // Using express.json() for JSON parsing

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
//   useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
//   useFindAndModify: false,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
