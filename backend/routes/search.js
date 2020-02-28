var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const Recipe = require('../models/Recipe');

//get recipe by ID
router.get('/recipe',function(req,res,next){
    
    const title = 'Fruit Pizza';
    Recipe.find({title:title}).then(recipe =>{
        if(recipe){
            res.json({recipe});
        }
        else{
            res.send("recipe not found");
        }
    })    
    
});

//get all recipe by tag: diet or cuisine ...

router.get('/cuisine', function(req,res,next){
    const cuisine = "Italian";
    Recipe.find({cuisines:cuisine}).then(recipes=>{
        if(recipes)
            res.json({recipes})
        else{
            res.send("makaynch")
        }
    })
});

router.get('/diet', function(req,res,next){
    const diet = "vegan";
    Recipe.find({diet:diet}).then(recipes=>{
        if(recipes)
            res.json({recipes})
        else{
            res.send("makaynch")
        }
    })
});

router.get('/dishtype', function(req,res,next){
    const dishtype = "snack";
    Recipe.find({type:dishtype}).then(recipes=>{
        if(recipes)
            res.json({recipes})
        else{
            res.send("makaynch")
        }
    })
});

module.exports = router;