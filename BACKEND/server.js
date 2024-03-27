const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const host = 'localhost';
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://senanayakaishan2:0xE4FfyGe57v8CyA@student-db1.4itqv4p.mongodb.net/?retryWrites=true&w=majority&appName=student-db1'

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log('Database connected');
  } catch (error) {
    console.log('MongoDB error', error);
  }
};
connect();

const server = app.listen(port, host, () => {
  console.log(`Node server is listening to ${server.address().port}`)
});