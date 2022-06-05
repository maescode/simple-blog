const router = require('express').Router();
const Category = require('../models/Category');

//Create Post 

router.post('/', (req,res)=>{
    const newCategory = Category(req.body);
    try {    
    const saveCategory = await newCategory.save();
    } catch (error) {
        
    }
})

module.exports = router;
