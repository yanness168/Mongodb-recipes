var createError = require('http-errors');
var express = require('express');
var path = require('path');
const PORT = 8000;
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/RecipeStore');
var db = mongoose.connection;
db.once('open', function(){
  console.log('Connected to mongodb');
}).on('error', function(err){
  console.log('Error connecting to mongodb');
})
const Recipe = require('./models/recipeSchema');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  Recipe.find({},function(err,recipes){
    if(err){
      console.log("error!")
    }else{
      res.render("index",{
        title: "Recipes",
        recipes: recipes
      })
    }
  })
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT, () => console.log(`IT'S WORKING on http://localhost:${PORT}`));
module.exports = app;
