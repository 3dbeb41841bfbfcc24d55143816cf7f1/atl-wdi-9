var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();

//Connect to DB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/infamous-masterminds');

<<<<<<< HEAD
//Engine stuff and middleware
=======
>>>>>>> af07117510aa0328f5d499e26e0c10be05c15bc2
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

<<<<<<< HEAD
//Load in routes
=======
>>>>>>> af07117510aa0328f5d499e26e0c10be05c15bc2
var criminalsController = require("./controllers/criminals.js");
app.use('/criminals', criminalsController);

app.listen(3000);
