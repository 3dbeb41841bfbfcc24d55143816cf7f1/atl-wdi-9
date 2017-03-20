//***************************
// REQUIREMENTS
//***************************
// Set up your express dependency here:

// Set express Router to a variable called router:

// Let's export this router file at the bottom of the page:
// (Scroll to bottom to Exports)

// Require the poke_array.js file here from models.
// Save it to a variable called data:
var express = require('express');
var router = express.Router();
var data = require('../models/poke_array.js');

//***************************
// READ
//***************************
// Note: All the routes below can be accessed at `localhost:3000/pokemon` + `resource`
// Make a GET route '/' that will render an index page of all pokemon images

router.get('/', (req, res) => {
	res.render('pokes/index', {    //sending data
		pokemon: data
	})
})

router.get('/new', (req,res) => {
	res.render('pokes/new')
})

// Make a GET route '/index/:index' that will render the Pokemon's show page at that :index
//
// Example: a user goes to 'localhost:3000/pokemon/index/0' in the browser and data for Bulbasaur (the pokemon at index 0) will be displayed.
router.get('/:id', (req, res) => {
	res.render('pokes/show', {
		pokemon : data[req.params.id],
    pokemonNum : req.params.id
	})
})


// Make a GET route '/new' that will simply render a form to create a new Pokemon


//***************************
// CREATE
//***************************
//make a POST route '/' to create a New Pokemon
router.post ('/', (req, res) => {
  var pokemonNew = {
    name: req.body.name,
    type: req.body.type,
    stats: {
      hp:  req.body.hp,
      attack: req.body.attack,
      defense: req.body.defense,
      spattack: req.body.spattack,
      spdefense: req.body.spdefense,
      speed: req.body.speed
    }
  }
	data.push(pokemonNew);
	res.redirect('/pokemon'); // finishing the new to dont
});

router.get('/new', (req,res) => {
	res.render('pokemon/new')
})

//***************************
// UPDATE
//***************************
router.put('/:id', (req, res) => {
  var pokemonToEdit = data[req.params.id];

  pokemonToEdit.name = req.body.name;
  pokemonToEdit.type = req.body.type;
  pokemonToEdit.stats.hp = req.body.hp; //this was tricky, I expected req.body.stats.hp-- this is pulling from the "PUT" form
  pokemonToEdit.stats.attack = req.body.attack;
  pokemonToEdit.stats.defense = req.body.defense;
  pokemonToEdit.stats.spattack = req.body.spattack;
  pokemonToEdit.stats.spdefense = req.body.spdefense;
  pokemonToEdit.stats.speed = req.body.speed;

  res.redirect(req.params.id);
});

router.get('/:id/edit', function(req, res){
  res.render('pokes/edit', {
    pokemon: data[req.params.id],
    pokemonNum : req.params.id
  });
});
//***************************
// DELETE
//***************************
//make a DELETE route '/:index' that will delete the Pokemon at this index.
router.delete('/:id', function(req, res) {
    data.splice(req.params.id, 1);
    res.redirect('/pokemon');
});

//***************************
// EXPORTS
//***************************
// use module.exports to export router:
// this makes the scripts on this page accessible by other files that "require" this file. Without exporting, the code in here just sits in here, alone.
module.exports = router;
