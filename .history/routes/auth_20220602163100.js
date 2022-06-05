const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt')

//Register
router.post('/register', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bycrypt.hash(req.body.password)
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

//Login
