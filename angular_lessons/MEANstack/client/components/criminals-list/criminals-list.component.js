let criminalsListTemplate = require(__dirname + '/criminals-list.html');
let criminalsListController = require (__dirname + '/criminals-list.controller.js');

let CriminalsListComponent = {
	template: criminalsListTemplate,
	controller: criminalsListController
}

angular.module('criminalsApp').component('criminalsList', CriminalsListComponent)
