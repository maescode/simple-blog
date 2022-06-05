const router = require('express').Router();
const Category = require('../models/Category');

//Create category
router.post('/', (req,res)=>{
    const newCategory = new Category(req.body);
    try {    
    const savedCategory = await newCategory.save();
    res.status(200).json(savedCategory);
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;
