var express = require("express");
var router = express.Router();
var piratesArray = require('../models/pirates.js') //structure of objects or data

//all routes for /pirate
router.get('/', function (req, res) {
  res.render('index.hbs', { //automatically assumes to look in views!!!
  	pirates: piratesArray  //Danny's suggestion in naming variables  
  }) 
});

router.get('/:id', (req, res) => {
	res.render('pirates/show', {
		pirate : piratesArray[req.params.id]
	})
})



//exports
module.exports = router; //throwing it up, for the server 
