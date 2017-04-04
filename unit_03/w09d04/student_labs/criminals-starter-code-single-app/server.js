var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();

//Connect to DB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/infamous-masterminds');

//Engine stuff and middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

//Load in routes
var criminalsController = require("./controllers/criminals.js");
app.use('/criminals', criminalsController);

app.listen(3000);
