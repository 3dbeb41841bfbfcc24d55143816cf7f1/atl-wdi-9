/* packages */
var express = require('express');
var logger  = require('morgan');
var path    = require('path')
var hbs     = require('hbs')
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var todontsController = require('./controllers/to_donts.js');

/*app setting*/
//var port        = process.env.PORT || 3000;
var app = express();

//log
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use( logger('dev'));
app.use('/to_donts', todontsController);
app.use(methodOverride('_method'));

//views
app.set('view engine', 'hbs') //neverforget!!!

// start server 
app.listen(3000);
