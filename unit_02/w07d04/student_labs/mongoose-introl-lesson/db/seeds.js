var mongoose = require('mongoose');
var Schema = require("./schema.js");

var StudentModel = Schema.StudentModel;
var ProjectModel = Schema.ProjectModel;

StudentModel.remove({}, function(err) {
  console.log(err);
});

ProjectModel.remove({}, (err) => {
  console.log(err);
});

var becky = new StudentModel({name: "Becky"});
var brandon = new StudentModel({name: "Brandon"});
var steve = new StudentModel({name: "Steve"});

var project1 = new ProjectModel({tile: "project1!", unit: "js"});
var project2 = new ProjectModel({tile: "project2!", unit: "express"});
var project3 = new ProjectModel({tile: "project3!", unit: "angular"});
var project4 = new ProjectModel({tile: "project4!", unit: "rails"});

// create two arrays that we can iterate over
var students = [becky, brandon, steve];
var projects = [project1, project2, project3, project4];

// Assigning projects to students.
students.forEach(function(student, i){
  student.projects.push(projects[i], projects[i + 1]);

student.save(function(err) {
  if(err) { console.log(err); }

    console.log(student);
  });
});
