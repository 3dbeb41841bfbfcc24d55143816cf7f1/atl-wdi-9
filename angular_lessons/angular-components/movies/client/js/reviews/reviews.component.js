let reviewsTemplate = require(__dirname + '/reviews.html');
let reviewsController = require(__dirname + '/reviews.controller.js');

let ReviewsComponent = {
	template: reviewsTemplate,
	controller: reviewsController
};

angular.module('moviesApp').component('reviews', ReviewsComponent);
