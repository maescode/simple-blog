const express = require('express');
const app = express();

const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log('connected to MongoDB'));

app.listen('8080', () => {});

app.use('/', (req, res) => {
  console.log('yinka');
});
