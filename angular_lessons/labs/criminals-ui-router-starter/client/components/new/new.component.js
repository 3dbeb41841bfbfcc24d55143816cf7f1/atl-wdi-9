const controller = require('./new.controller.js');
const template = require('./new.html');

const component = {
	controller: controller,
	template: template
};

angular
	.module('criminals')
	.component('new', component);
	