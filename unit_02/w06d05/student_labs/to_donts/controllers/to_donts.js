var express = require('express')
var router = express.Router()
var data = require('../models/data.js')

router.get('/', (req, res) => {
	res.render('todonts/index', {
		items: data.seededToDonts
	})
});

router.post('/', (req, res) => {
	var newToDont = {
		description: req.body.description,
		urgent: req.body.urgent
	};
	data.seededToDonts.push(newToDont);
	res.redirect('/todonts'); // finishing the new to dont
});

router.get('/new', function(req, res) {
  res.render('todonts/new')
});

router.get('/:id', (req, res) => { //NOTE TO BRANDON -- this has to go at the bottom of the routers. It's never getting to /new. This was taking it to show.hbs.
	res.render('todonts/show', {
		item: data.seededToDonts[req.params.id]
	})
})

router.put('/:id', function(req, res) {
  var todontToEdit = data.seededToDonts[req.params.id];

  todontToEdit.description = req.body.description;
  todontToEdit.urgent = req.body.urgent;
  res.redirect('todonts');
});

router.get('/:id/edit', function(req, res){
  res.render('todonts/edit', {
    todont: {
      description: data.seededToDonts[req.params.id].description,
      urgent: data.seededToDonts[req.params.id].urgent,
      id: req.params.id
    }
  });
});

router.delete('/:id', function(req, res) {
    data.seededToDonts.splice(req.params.id, 1);
    res.redirect('/todonts');
});

module.exports = router;