angular
	.module('InfamousCriminals')
	.service('CriminalServices', CriminalServices);

CriminalServices.$inject = ['$http'];

function CriminalServices($http) {
	console.log('here I am');
	var vm = this;

	vm.getCriminals = function() {
  return $http
  	.get('/criminals')
    .then(function(response) {
      return response.data.criminals;
    });
  }

  vm.addCriminal = function(newCriminal) {
  	return $http
      .post('/criminals', newCriminal);
  }

  vm.deleteCriminal = function(criminal) {
  	return $http
  		.delete('/criminals/' + criminal._id)
  }
}

