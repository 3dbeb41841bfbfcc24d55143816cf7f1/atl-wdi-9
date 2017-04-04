var express = require('express');
var path = require('path');
var cors = require('cors');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();

//Connect to DB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/presidents-app');

//Engine stuff and middleware
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

//Load in routes
var presidentsController = require("./controllers/presidents.js");
app.use('/presidents', presidentsController);

app.listen(3000);
