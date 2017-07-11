// app.js which I am saving as server.js

//require express package
var express = require('express');
//save an express module as 'app'
var app     = express();
// assigning 3000 as our port
var port    = 3000;
var hbs = require('hbs');
app.set("view engine", "hbs");
app.set('views', './views');

app.use(express.static(__dirname + '/public')); //css and whatnot


app.get("/", (req, res) => {
	res.send('Welcome to Pizza Express!');
});

app.get('/topping/:type', (req, res) => {
    res.render("toppings.hbs", {
    	topping: req.params.type
    });
});

app.get("/test/:someValue", (req, res) => {
  res.render("index.hbs", {
    message: req.params.someValue
  });
});

app.get('/order/:amount/:size', (req, res) => {
   res.render("order.hbs", {
   	  order: req.params.amount,
   	  size: req.params.size
   });
});

app.get('/:anything', (req, res) => {
	res.render("page_not_found.hbs", {
		data: req.params.anything
	});
});

// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});