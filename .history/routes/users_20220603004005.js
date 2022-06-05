const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

//UPDATE
router.put('/:id', async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updateUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      const { password, ...others } = updateUser._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json('You can only update your account');
  }
});

//DELETE
router.post('/:id', async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json();
  }
});

module.exports = router;
