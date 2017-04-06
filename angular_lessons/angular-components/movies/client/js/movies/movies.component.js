let moviesTemplate = require(__dirname + '/movies.html');
let moviesController = require(__dirname + '/movies.controller.js');

let MoviesComponent = {
	template: moviesTemplate,
	controller: moviesController,
};

angular.module('moviesApp').component('movies', MoviesComponent);

