const router = require('express').Router();
const Category = require('../models/Category');

//Create category
router.post('/', async (req, res) => {
  const newCategory = new Category(req.body);
  try {
    const savedCategory = await newCategory.save();
    res.status(200).json(savedCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});

// fetch all category
router.get('/', async (req, res) => {
  //@ts-ignoreconst newCategory = new Category(req.body);
  try {
    const allCategores = await Category.find();
    res.status(200).json(allCategores);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
