const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post').default;
const bcrypt = require('bcrypt');

//CREATE A POST TO
router.post('/', async (req, res) => {
  const newPost = Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

//UPDATE
router.put('/:id', async (req, res) => {
  if (req.body.postId === req.params.id) {
    try {
      const updatePost = await Post.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json('You can only update your post');
  }
});

//DELETE
router.delete('/:id', async (req, res) => {
  if (req.body.PostId === req.params.id) {
    try {
      await Post.findByIdAndDelete(req.params.id);
      res.status(200).json('post has been deleted');
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json('You can only delete your post');
  }
});

//GET A POST
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
