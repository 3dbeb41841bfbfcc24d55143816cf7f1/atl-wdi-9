const controller = require('./criminals.controller.js');
const template = require('./criminals.html');

const component = {
	controller: controller,
	template: template
};

angular
	.module('criminals')
	.component('criminals', component);
<<<<<<< HEAD
				//this criminals is linked to the <criminal> component
				// HTML "<page-list>" angular "pageList"
=======
>>>>>>> 5589bc133bafa8ca4d606b05ef423dfa48528eb5
