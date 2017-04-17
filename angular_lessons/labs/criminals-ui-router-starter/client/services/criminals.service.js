angular
	.module('criminals')
	.service('CriminalsService', CriminalsService);

CriminalsService.$inject = ['$http'];

function CriminalsService($http) {
	const self = this;

	// WHAT THIS SERVICE DOES / HAS AVAILABLE TO CALL
	self.loadAll = loadAll;
	self.loadCurrent = loadCurrent;
	self.addCriminal = addCriminal;
	self.deleteCrim = deleteCrim;


	// HOW IT DOES STUFF.  'api' says it is back end
	function loadAll() {
		return $http.get('/api/criminals');
	}

	function loadCurrent(id) {   //you must include the id in the service
		return $http.get('/api/criminals/' + id);
	}

	function addCriminal(newCriminal) {
		return $http
		.post('/api/criminals', newCriminal);
	}

	function deleteCrim(criminal) {
		return $http
		.delete('/api/criminals/' + criminal._id);
	}
}
