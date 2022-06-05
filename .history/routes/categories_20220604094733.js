const router = require('express').Router();
const Category = require('../models/Category');

//Create Post 

router.post('/', (req,res)=>{
    const newCategory = Category(req.body);
    const saveCategory = await newCategory.save();
})

module.exports = router;
