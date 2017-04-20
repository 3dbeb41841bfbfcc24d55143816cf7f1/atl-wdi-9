<<<<<<< HEAD
const controller = require ('./about.component.js');
const template = require ('./about.html');
=======
const controller = require('./about.controller.js');
const template = require('./about.html');
>>>>>>> 5589bc133bafa8ca4d606b05ef423dfa48528eb5

const component = {
	controller: controller,
	template: template
};

angular
	.module('criminals')
<<<<<<< HEAD
	.component('about', component)
=======
	.component('about', component);
>>>>>>> 5589bc133bafa8ca4d606b05ef423dfa48528eb5
