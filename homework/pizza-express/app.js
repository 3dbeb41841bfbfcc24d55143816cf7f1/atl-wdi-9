var express = require('express');
var app     = express();
var hbs     = require('hbs');
var port    = 3000;

app.set("view engine", "hbs");
app.set('views', './views');


app.get('/', function(req, res) {
		res.send("Welcome to Pizza Express!");
});

app.get('/topping/:type', function(req, res, next) {

    res.send(`${req.params.type} Pizza, Good choice!`);
});


app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});