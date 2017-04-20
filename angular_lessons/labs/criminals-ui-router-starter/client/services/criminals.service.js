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
<<<<<<< HEAD
	function loadCurrent (id) {
=======
	function loadCurrent(id) {
>>>>>>> 5589bc133bafa8ca4d606b05ef423dfa48528eb5
=======
	function loadCurrent(id) {
>>>>>>> 05492c7a07476f2408630e07c04047cee1b2c78b
		return $http.get('/api/criminals/' + id);
	}
}
