var express = require('express');
var router = express.Router();
var data = require('../data.js');

router.get('/', function(req, res) {

  res.render('todos/index.hbs', {
    todos: data.seededTodos
  });
});

router.get('/new', function(req, res){
  res.render('todos/new');
});

module.exports = router;