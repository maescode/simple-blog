const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');
const multer = require('./routes/multers');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log('connected to MongoDB'))
  .catch((error) => console.log(error));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, 'images');
  },
});

app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/post', postRoute);
app.use('/api/categories', categoryRoute);

app.listen('8081', () => {});

app.use('/', (req, res) => {
  console.log('port 8081 listening');
});
