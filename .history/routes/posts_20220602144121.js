const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: { type: String, required: false },
    photo: { type: String, required: true },
    profilePic: { type: String, default: '' },
  },
  { timestamp: true }
);
module.exports = mongoose.models('Post', PostSchema);
