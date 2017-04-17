const controller = require('./criminal.edit.controller.js');
const template = require('./criminal.edit.html');

const component = {
	controller: controller,
	template
};

angular
	.module('criminals')
	.component('criminalEdit', component);
	