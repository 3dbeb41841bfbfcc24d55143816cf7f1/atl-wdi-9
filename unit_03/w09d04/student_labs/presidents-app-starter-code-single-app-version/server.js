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
<<<<<<< HEAD
//Engine stuff and middleware
=======
=======
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

>>>>>>> c1ba13c7fa4e87d2c0547a57d23dadaff121eeef
var presidentsController = require("./controllers/presidents.js");
app.use('/presidents', presidentsController);

>>>>>>> af07117510aa0328f5d499e26e0c10be05c15bc2
app.use(cors());
<<<<<<< HEAD
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
=======

>>>>>>> c1ba13c7fa4e87d2c0547a57d23dadaff121eeef
app.use(express.static('public'));

<<<<<<< HEAD
//Load in routes
var presidentsController = require("./controllers/presidents.js");
app.use('/presidents', presidentsController);

=======
>>>>>>> af07117510aa0328f5d499e26e0c10be05c15bc2
app.listen(3000);
