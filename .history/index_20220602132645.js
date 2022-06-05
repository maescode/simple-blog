const express = require('express');
const app = express();

const dotenv = require('dotenv');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, { useCreateIndex: true });

dotenv.config();

// app.use('/', (req, res) => {
//   //console.log('Hell this is main url');
// });

app.listen('5002', () => {
  console.log('backend is running');
});