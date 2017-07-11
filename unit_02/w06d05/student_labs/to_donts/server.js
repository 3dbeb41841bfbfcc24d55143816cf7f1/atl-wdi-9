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
app.use( logger('dev'));

//views
app.set('view engine', 'hbs') //neverforget!!!
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

//after everything is set up then use methodOverride
app.use(methodOverride('_method'));
app.use('/todonts', todontsController);

// start server 
app.listen(3000);
