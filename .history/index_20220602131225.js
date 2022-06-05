const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

app.use('/', (req, res) => {
  console.log('Hell this is main url');
});

app.listen('5000', () => {
  console.log('backend is running');
});
