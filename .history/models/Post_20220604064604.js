import { Schema, model } from 'mongoose';
const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: { type: String, required: true },
    photo: { type: String, required: false },
    username: { type: String, required: true },
    categories: { type: Array, required: false },
  },
  { timestamp: true }
);
export default model('Post', PostSchema);
