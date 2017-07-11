var Schema = require("../db/schema.js");
var StudentModel = Schema.StudentModel;
var ProjectModel = Schema.ProjectModel;

var studentsController = {
  index: function () {
    StudentModel.find({})
    .exec(function(err, docs) {
      if (err) { console.log(err); }

      docs.forEach(function(doc) {
        console.log(doc);
      })
    });
  },
  show: function(req) {
    StudentModel.findOne({name: req.name})
      .exec(function(err, docs) {
        if (err) { console.log(err); }

        console.log(docs);
      });
  },
  // This method takes two arguments: (1) the old instance and (2) what we want to update it with.
  update: function(req, update) {
    StudentModel.findOneAndUpdate({name: req.name}, {name: update.name}, {new: true})
    .exec(function(err, docs) {
      if (err) { console.log(err); }

      console.log(docs);
    });
  },
  destroy: function(req) {
    StudentModel.findOneAndRemove({name: req.name})
    .exec(function(err, docs) {
      if (err) { console.log(err); }

      console.log(docs);
    });
  }
};

// studentsController.index();
// studentsController.show({name: "Bob"});
studentsController.update({name: "Bob"}, {name: "David"});
// studentsController.destroy({name: "David"});
