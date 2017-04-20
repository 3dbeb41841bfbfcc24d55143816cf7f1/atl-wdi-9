<<<<<<< HEAD
const controller = require ('./home.component.js');
const template = require ('./home.html');

const component = {
	controller: controller,
	template: template
};

angular
	.module('criminals')
	.component('home', component);
=======
const controller = require('./home.controller.js');
const template = require('./home.html');

const component = {
  controller: controller,
  template: template
};

angular
  .module('criminals')
  .component('home', component);
>>>>>>> 5589bc133bafa8ca4d606b05ef423dfa48528eb5
