const controller = require('./criminals.new.controller.js');
<<<<<<< HEAD
const template = require ('./criminals.new.html');

const Showcomponent = {
=======
const template = require('./criminals.new.html');

const component = {
>>>>>>> 5589bc133bafa8ca4d606b05ef423dfa48528eb5
	controller: controller,
	template: template
};

angular
	.module('criminals')
<<<<<<< HEAD
	.component('criminals', Showcomponent);
=======
	.component('criminalsNew', component);
>>>>>>> 5589bc133bafa8ca4d606b05ef423dfa48528eb5
