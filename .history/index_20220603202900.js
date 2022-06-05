const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log('connected to MongoDB'))
  .catch((error) => console.log(err));

app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/post', postRoute);

app.listen('8081', () => {});

app.use('/', (req, res) => {
  console.log('yinka how far');
});
