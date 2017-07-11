var express     = require('express')
var logger      = require('morgan')
var hbs         = require('hbs')
var bodyParser  = require('body-parser')
var path        = require('path');
var piratesController = require(__dirname + '/controllers/pirates.js'); //or ./controllers/pirates.js
/*app settings*/
var app         = express();
var port        = process.env.PORT || 3000;
/*log*/
app.use( logger('dev'));
/*view*/
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));   
app.use(bodyParser.urlencoded({ extended: false})); 
app.use(bodyParser.json()); /*?!?!?!?*/ /*this allows req.body. when posting data */

app.use("/pirates", piratesController);

app.listen(3000);