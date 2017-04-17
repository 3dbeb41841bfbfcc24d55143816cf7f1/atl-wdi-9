const controller = require('./criminals.controller.js');
const template = require('./criminals.html');

const component = {
	controller: controller,
	template: template
};

angular
	.module('criminals')
	.component('criminals', component);
				//this criminals is linked to the <criminal> component
				// HTML "<page-list>" angular "pageList"