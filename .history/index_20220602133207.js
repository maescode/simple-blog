const express = require('express');
const app = express();

const dotenv = require('dotenv');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, { useCreateIndex: true });

dotenv.config();

app.listen('8900', () => {});

app.use('/', (req, res) => {
  //   console.log('yinka');
  res._write('welcome');
});
