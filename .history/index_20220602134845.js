const express = require('express');
const app = express();

const dotenv = require('dotenv');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);

dotenv.config();

app.listen('8080', () => {});

app.use('/', (req, res) => {
  console.log('yinka');
});
