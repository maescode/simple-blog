const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  type: String,
  required: true,
  unique: true,
},;
