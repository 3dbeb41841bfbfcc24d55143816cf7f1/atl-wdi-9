//***************************
// REQUIREMENTS
//***************************
// Set up your express dependencies here:
var express = require('express');
var logger  = require('morgan');
var path    = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var hbs = require('hbs');
// left off morgan and path

var path    = require('path');

//***************************
// MIDDLEWARE
//***************************
//set up your middleware and view engine here
var app = express();
//app.use (logger('dev'));
app.use( logger('dev'));
console.log();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(methodOverride('_method')); //or do it need to go even lower

//***************************
// CONTROLLERS
//***************************
//set up your controller for the `/pokemon` resource
var pokemonController = require('./controllers/pokemon.js');
app.use('/pokemon', pokemonController);

//***************************
// LISTENER
//***************************
// Add a listener for port 3000:
app.listen(3000);
