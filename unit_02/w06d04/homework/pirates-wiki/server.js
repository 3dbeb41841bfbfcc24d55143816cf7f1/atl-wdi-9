var express     = require('express')
var logger      = require('morgan')
var hbs         = require('hbs')
var bodyParser  = require('body-parser')

// var path     = require('path');

var app         = express();
var port        = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use( logger('dev'));

app.set('view engine', 'hbs');

var piratesController = require(__dirname + '/controllers/pirates.js'); //or ./controllers/pirates.js
app.use("/pirates", piratesController);






app.listen(3000);