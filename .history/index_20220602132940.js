const express = require('express');
const app = express();

const dotenv = require('dotenv');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, { useCreateIndex: true });

dotenv.config();

app.use('/', (req, res) => {console.log('yinka')}

// app.listen('5000', () => {});
