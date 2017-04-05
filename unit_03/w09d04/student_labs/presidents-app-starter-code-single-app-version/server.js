var express = require('express');
var path = require('path');
var cors = require('cors');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();

//Connect to DB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/presidents-app');

<<<<<<< HEAD
//Engine stuff and middleware
=======
var presidentsController = require("./controllers/presidents.js");
app.use('/presidents', presidentsController);

>>>>>>> af07117510aa0328f5d499e26e0c10be05c15bc2
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

<<<<<<< HEAD
//Load in routes
var presidentsController = require("./controllers/presidents.js");
app.use('/presidents', presidentsController);

=======
>>>>>>> af07117510aa0328f5d499e26e0c10be05c15bc2
app.listen(3000);
