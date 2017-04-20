const angular = require('angular');
require('angular-ui-router');
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 05492c7a07476f2408630e07c04047cee1b2c78b

angular
	.module('criminals', ['ui.router'])
	.config(uiRouterSetup);

uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
function uiRouterSetup($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/',
<<<<<<< HEAD
			//template: '<home></home>'
			template: '<home></home>'
		})
		.state('about', {
			url: '/about',
			template: '<about></about>'
		})
		.state('criminals', {
			url: '/criminals',
			template: '<criminals></criminals>'

		})
		.state('criminalsNew', {
			url: '/criminals/new',
			template: '<criminals-new></criminals-new>'
		})
		.state('criminalsShow', {
			url: '/criminals/:criminalId',
			template: '<criminals-show></criminals-show>'
		});

	$urlRouterProvider.otherwise('/');
}



=======

angular
	.module('criminals', ['ui.router'])
	.config(uiRouterSetup);

uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
function uiRouterSetup($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/',
=======
>>>>>>> 05492c7a07476f2408630e07c04047cee1b2c78b
			template: '<home></home>'
		})
		.state('about', {
			url: '/about',
			// template: '<about></about>' // LAB Goal #1 -- get this line to work
			template: '<h1>About</h1><a ui-sref="home">Home</a>'
		})
		.state('criminals', {
			url: '/criminals',
			template: '<criminals></criminals>'
		})
		.state('criminalsNew', {
			url: '/criminals/new',
			template: '<criminals-new></criminals-new>'
		})
		.state('criminalsShow', {
			url: '/criminals/:criminalId',
			template: '<criminals-show></criminals-show>'
		});

	$urlRouterProvider.otherwise('/');
}
<<<<<<< HEAD
>>>>>>> 5589bc133bafa8ca4d606b05ef423dfa48528eb5
=======
>>>>>>> 05492c7a07476f2408630e07c04047cee1b2c78b
