<<<<<<< HEAD
<<<<<<< HEAD
const controller = require ('./about.component.js');
const template = require ('./about.html');
=======
const controller = require('./about.controller.js');
const template = require('./about.html');
>>>>>>> 5589bc133bafa8ca4d606b05ef423dfa48528eb5
=======
const controller = require('./about.controller.js');
const template = require('./about.html');
>>>>>>> 05492c7a07476f2408630e07c04047cee1b2c78b

const component = {
	controller: controller,
	template: template
};

angular
	.module('criminals')
<<<<<<< HEAD
<<<<<<< HEAD
	.component('about', component)
=======
	.component('about', component);
>>>>>>> 5589bc133bafa8ca4d606b05ef423dfa48528eb5
=======
	.component('about', component);
>>>>>>> 05492c7a07476f2408630e07c04047cee1b2c78b
