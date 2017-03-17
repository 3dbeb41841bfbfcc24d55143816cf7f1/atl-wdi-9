var express = require('express')
var router = express.Router()
var data = require('../models/data.js')

router.get('/', (req, res) => {
	res.render('index', {
		items: data.seededToDonts
	})
})

router.get('/:id', (req, res) => {
	res.render('show', {
		item: data.seededToDonts[req.params.id]
	})
})

router.post('/', (req, res) => {
	var newToDont = {
		description: req.body.description,
		urgent: req.body.urgent
	};
	data.seededToDonts.push(newToDont);
	res.redirect('/to_dont');
});

module.exports = router;