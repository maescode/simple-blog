const router = require('express').Router();
const Category = require('../models/Category');

//Create Post 

router.post('/', (req,res)=>{
    try {
        const newCategory = Category(req.body);
    const saveCategory = await newCategory.save();
    } catch (error) {
        
    }
})

module.exports = router;
