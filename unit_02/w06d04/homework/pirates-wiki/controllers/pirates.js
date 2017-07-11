var express = require("express");
var router = express.Router();
var piratesArray = require('../models/pirates.js') //structure of objects or data

//all routes for /pirate
router.get('/', function (req, res) {
  res.render('pirates/index', { //automatically assumes to look in views!!!
  	pirates: piratesArray  //Danny's suggestion in naming variables
  })
});

router.post ('/', (req, res) => {
	/*var newPirate = {
		name: req.body.name,
		birthplace: req.body.birthplace,
		death_year: req.body.death_year,
		base: req.body.base,
		nickname: req.body.nickname
	}; */ /*is there a faster way to do this?*/
	var newPirate = req.body;  // all this body stuff is due to body-parser package
	piratesArray.push(newPirate);
	res.redirect('/pirates'); // finishing the new to dont
});

router.get('/new', (req,res) => {
	res.render('pirates/new')
})

router.get('/:id', (req, res) => {
	console.log(req.params.id)
	res.render('pirates/show', {
		pirate : piratesArray[req.params.id]
	})
})

//exports
module.exports = router; //throwing it up, for the server
