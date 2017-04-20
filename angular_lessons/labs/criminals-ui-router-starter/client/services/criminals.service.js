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


	// HOW IT DOES STUFF
	function create(criminalData) {
		return $http
			.post('/api/criminals', criminalData);
	}

	function loadAll() {
		return $http.get('/api/criminals');
	}

<<<<<<< HEAD
	function loadCurrent (id) {
=======
	function loadCurrent(id) {
>>>>>>> 5589bc133bafa8ca4d606b05ef423dfa48528eb5
		return $http.get('/api/criminals/' + id);
	}
}
