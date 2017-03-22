var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/students');

//promise library
mongoose.Promise = global.Promise;

// Now that we are connected, let's save that connection to the database in a variable. We are just doing this to keep our code DRY.
var db = mongoose.connection;

//Errors on console
db.on('error', function(err) {
  console.log(err);
});

// once connected...
db.once('open', function () {
  console.log("database has been connected!");
})

// Disconnect from database
db.close();

var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  title: String,
  unit: String
});

var StudentSchema = new Schema({
  name: String,
  age : Number,
  projects: [ProjectSchema]
});

var ProjectModel = mongoose.model("Project", ProjectSchema);
var StudentModel = mongoose.model("Student", StudentSchema);

// First we create a new student. It's just like generating a new instance of a constructor function!
var frankie = new StudentModel({name: "Frankie P.", age: 30});

// Then we save it to the database using .save
frankie.save(function(err, student){
  if (err) {console.log(err);}
  else {console.log(student);}
});

// another way to do it using create instead of save
//
// StudentModel.create({ name: 'Frankie P.', age: 30 }, function (err, student) {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log(student);
//   }
// });

var anna = new StudentModel({name: "Anna", age: 28});
var project1 = new ProjectModel({title: "memory game", unit: "JS"});

// Now we add that project to a student's collection / array of projects.
anna.projects.push(project1);
// In order to save that project to the student, we need to call `.save()` on the student -- not the project.
anna.save(function(err, student) {
  if (err) {
    console.log(err);
  }
  else {
    console.log(student + " was saved to our db!");
  }
});

var callBack = function(err, student) {
  if (!err) {console.log(student + " was saved to our db");}
  else {console.log(err);}
}

var bob = new StudentModel({name: "Bob", age: 28});
bob.projects.push(project1);

bob.save((err, student) => {
  callBack(err, student);
});


// By adding `module.exports`, we can reference these models in other files by requiring `schema.js`.
module.exports = {
  StudentModel: StudentModel,
  ProjectModel: ProjectModel
};
