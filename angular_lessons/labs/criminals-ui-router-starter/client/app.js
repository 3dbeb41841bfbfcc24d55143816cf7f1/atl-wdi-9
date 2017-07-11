const angular = require('angular');
require('angular-ui-router');

angular
	.module('criminals', ['ui.router'])
	.config(uiRouterSetup);

<<<<<<< HEAD
uiRouterSetup.$inject=['$stateProvider', '$urlRouterProvider'];
=======
uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
>>>>>>> 5589bc133bafa8ca4d606b05ef423dfa48528eb5
function uiRouterSetup($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			template: '<home></home>'
		})
		.state('about', {
			url: '/about',
<<<<<<< HEAD
			template: '<about></about>'
=======
			// template: '<about></about>' // LAB Goal #1 -- get this line to work
			template: '<h1>About</h1><a ui-sref="home">Home</a>'
>>>>>>> 5589bc133bafa8ca4d606b05ef423dfa48528eb5
		})
		.state('criminals', {
			url: '/criminals',
			template: '<criminals></criminals>'
		})
<<<<<<< HEAD
		.state('criminalsShow', {
			url: '/criminals/:criminalId',
			template: '<criminals-show></criminals-show>'
		})
		.state('new', {
			url: '/new',
			template: '<new></new>'
		})
		.state('delete', {
			url: '/delete',
			template: '<delete></delete>'
=======
		.state('criminalsNew', {
			url: '/criminals/new',
			template: '<criminals-new></criminals-new>'
		})
		.state('criminalsShow', {
			url: '/criminals/:criminalId',
			template: '<criminals-show></criminals-show>'
>>>>>>> 5589bc133bafa8ca4d606b05ef423dfa48528eb5
		});

	$urlRouterProvider.otherwise('/');
}
