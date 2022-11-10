const express = require('express');
const recipeR = express.Router();
var {check, validateResult} = require('express-validator');

const Recipe = require('../models/recipeSchema');

recipeR.route('')