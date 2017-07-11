angular
	.module('criminals')
	.service('CriminalsService', CriminalsService);

CriminalsService.$inject = ['$http'];

function CriminalsService($http) {
	const self = this;

	// WHAT THIS SERVICE DOES / HAS AVAILABLE TO CALL
	self.create = create;
	self.loadAll = loadAll;
	self.loadCurrent = loadCurrent;
<<<<<<< HEAD
	self.addCriminal = addCriminal;
	self.deleteCrim = deleteCrim;


	// HOW IT DOES STUFF.  'api' says it is back end
=======


	// HOW IT DOES STUFF
	function create(criminalData) {
		return $http
			.post('/api/criminals', criminalData);
	}

>>>>>>> 5589bc133bafa8ca4d606b05ef423dfa48528eb5
	function loadAll() {
		return $http.get('/api/criminals');
	}

<<<<<<< HEAD
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
=======
	function loadCurrent(id) {
		return $http.get('/api/criminals/' + id);
	}
>>>>>>> 5589bc133bafa8ca4d606b05ef423dfa48528eb5
}
