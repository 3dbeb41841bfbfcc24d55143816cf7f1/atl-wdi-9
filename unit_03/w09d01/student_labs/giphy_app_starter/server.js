var express        = require('express');
var bodyParser     = require('body-parser');
var logger         = require('morgan');
var mongoose       = require('mongoose');
var gifsController = require('./controllers/gifs.js');

var app = express();

app.use(express.static('public'))

mongoose.connect('mongodb://liamtrobinson:madeof7cats!@cluster0-shard-00-00-rqvdu.mongodb.net:27017,cluster0-shard-00-01-rqvdu.mongodb.net:27017,cluster0-shard-00-02-rqvdu.mongodb.net:27017/Cluster0?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));

app.use('/gifs', gifsController);

app.listen(3000, function() {
  console.log('hey')
});
