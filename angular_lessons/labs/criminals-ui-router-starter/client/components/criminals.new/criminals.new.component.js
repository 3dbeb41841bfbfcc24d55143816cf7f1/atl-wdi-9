const controller = require('./criminals.new.controller.js');
const template = require ('./criminals.new.html');

const Showcomponent = {
	controller: controller,
	template: template
};

angular
	.module('criminals')
	.component('criminals', Showcomponent);