const express = require('express');
const app = express();

app.use('/lamaa', (req, res) => {
  console.log('Hell this is main url');
});

app.listen('5000', () => {
  console.log('backend is running');
});
