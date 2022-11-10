const express = require('express');
const recipeR = express.Router();
var {check, validationResult} = require('express-validator');

const Recipe = require('../models/recipeSchema');

recipeR.route('/single/:id')
    .get(function (req, res){
        Recipe.findById(req.params.id, function (err, recipe){
            res.render('specificRecipe', {recipe, title: recipe.name})
        })
    })

recipeR.route('/add-recipe')
    .get(function (req,res){
        res.render('addRecipe', {title: 'Add Recipe'})
    })
    .post(async function (req,res){
        await check('name', "Need a name!").notEmpty().run(req);
        await check('description', "Need a description!").notEmpty().run(req);
        await check('difficulty', "Need a difficulty level (0-5)!").isFloat({min:0, max:5}).run(req);
        await check('ingredients', "Need some ingredients!").notEmpty().run(req);
        await check('steps', "Let me know the steps!").notEmpty().run(req);

        const errors = validationResult(req);
        if(errors.isEmpty()){
            let recipe = new Recipe();
            recipe.name = req.body.name;
            recipe.description = req.body.description;
            recipe.difficulty = req.body.difficulty;
            const ingredientsArr = req.body.ingredients.split(/[.;\n]/)
            recipe.ingredients = ingredientsArr.slice(0,ingredientsArr.length-1);
            const stepsArr = req.body.steps.split(/[\n.;]/)
            recipe.steps = stepsArr.slice(0,stepsArr.length-1);

            recipe.save(function(err){
                if(err){
                    console.log(err);
                    return;
                }else{
                    res.redirect('/')
                }
            })
        }else{
            res.render('addRecipe',{errors:errors.array(),title: 'Add Recipe'})
        }

    })

module.exports = recipeR;