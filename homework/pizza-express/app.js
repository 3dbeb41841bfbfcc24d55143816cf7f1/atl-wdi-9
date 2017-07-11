var express = require('express');
var app     = express();
var hbs     = require('hbs');
var port    = 3000;

app.set("view engine", "hbs");
app.set('views', './views');


app.get('/', function(req, res) {
		//res.send("Welcome to Pizza Express!");
		res.render('index.hbs', {
			data: "Welcome to pizza Express"
		});
});

app.get('/topping/:type', function(req, res, next) {

    //res.send(`${req.params.type} Pizza, Good choice!`);
    res.render('toppings.hbs', {
    	data: req.params.type + " " + " "
    });
});


app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});

app.get('/order/:amount/:size', function(req, res, next) {

	//res.send(`order for ${req.params.amount} ${req.params.size} pizzas will be ready in 1 minute!`);
	res.render('order.hbs', {
		data: req.params.amount + req.params.size + " " + " "
	});
});