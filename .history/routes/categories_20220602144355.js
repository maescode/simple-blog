const mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamp: true }
);
module.exports = mongoose.models('Category', PostSchema);
