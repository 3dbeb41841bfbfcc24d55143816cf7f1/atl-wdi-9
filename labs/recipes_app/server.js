/* packages */
//var path        = require('path');

var express     = require('express');
var hbs         = require('hbs');
/* app settings*/
var app         = express();
var port        = process.env.PORT || 3000;

var data = require('./recipes.js');
/* set up the application params*/
//var bodyParser = require('body-parser');
//app.use(logger('dev'));
app.set('view engine', 'hbs');

app.get('/recipes', function(req,res) {
  //res.send("This the recipes!");
  //res.send(dataTest);
  res.render('recipes/index.hbs', {
    data: data.seededRecipes
  });
});

app.get('/new', (req, res) => {
	res.render('recipes/new.hbs');
});

app.get('/recipes/:id', (req, res) => {
  var recipe = data.seededRecipes[req.params.id];
  res.render('recipes/show', {
    data: recipe
  });
});

app.listen(3000);


  
   
 