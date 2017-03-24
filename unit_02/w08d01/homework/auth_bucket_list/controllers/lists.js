//======================
// REQUIREMENTS
//======================
//require express,router,  mongoose, List schema, User schema, authHelpers
var express = require('express');
var router = express.Router({mergeParams: true});
var User = require('../models/user.js');
var List = require('../models/list.js');
var authHelpers = require('../helpers/auth.js');

//======================
// CREATE
//======================
//create a POST "/" route that saves the list item to the logged in user
router.post('/', function(req, res) {
  var list = new list ({
    name: req.body.name,
    completed: req.body.completed
  })
  list.save(function (err, user){
    if (err) console.log(err);

    console.log(user);
    res.redirect('/users');
  });
})

//======================
// EDIT
//======================
//create a GET "/:id/edit" route that renders the list's edit page
router.get('/:id/edit', function(req, res) {
  User.findById(req.params.userId)
  .exec(function (err, user){
    if (err) { console.log(err); }
    const list = user.list.id(req.params.id);

      res.render('list/edit', {
        name: name,
        complete: complete
      });
    });
});



//======================
// UPDATE
//======================
//create a PUT "/:id" route that saves the changes from the list.


//======================
// DELETE
//======================
//create a DELETE "/:id" route that deletes the list item


//======================
// EXPORTS
//======================
module.exports = router;
