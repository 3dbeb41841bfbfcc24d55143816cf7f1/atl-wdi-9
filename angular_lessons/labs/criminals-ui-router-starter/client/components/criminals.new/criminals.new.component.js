const controller = require('./criminals.new.controller.js');
<<<<<<< HEAD
<<<<<<< HEAD
const template = require ('./criminals.new.html');

const Showcomponent = {
=======
const template = require('./criminals.new.html');

const component = {
>>>>>>> 5589bc133bafa8ca4d606b05ef423dfa48528eb5
=======
const template = require('./criminals.new.html');

const component = {
>>>>>>> 05492c7a07476f2408630e07c04047cee1b2c78b
	controller: controller,
	template: template
};

angular
	.module('criminals')
<<<<<<< HEAD
<<<<<<< HEAD
	.component('criminals', Showcomponent);
=======
	.component('criminalsNew', component);
>>>>>>> 5589bc133bafa8ca4d606b05ef423dfa48528eb5
=======
	.component('criminalsNew', component);
>>>>>>> 05492c7a07476f2408630e07c04047cee1b2c78b
