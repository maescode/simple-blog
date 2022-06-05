const router = require('express').Router();
const Category = require('../models/Category');

//Create Post 

router.post('/', (req,res)=>{
    const newCategory = new Category(req.body);
    try {    
    const saveCategory = await newCategory.save();
    } catch (error) {
        
    }
})

module.exports = router;
