angular
	.module('criminalsApp')
	.service('CriminalsService', CriminalsService);

CriminalServices.$inject = ['$http'];

function CriminalsService($http) {
	var self = this;

	self.getCriminals = function () {
		console.log('getCriminals is working');

		return $http.get('/criminals')
		.then(function(response) {
      		return response.data.criminals;
    	});
	}
}