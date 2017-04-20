CriminalsShowController.$inject = ['$stateParams', 'CriminalsService'];

function CriminalsShowController($stateParams, CriminalsService) {
	const vm = this;

	vm.current = {};

	activate();

	function activate() {
<<<<<<< HEAD
		loadCurrentCriminals();
	}

	function loadCurrentCriminals() {
=======
		loadCurrentCriminal();
	}

	function loadCurrentCriminal() {
		console.log($stateParams);

>>>>>>> 5589bc133bafa8ca4d606b05ef423dfa48528eb5
		CriminalsService
			.loadCurrent($stateParams.criminalId)
			.then(function resolve(response) {
				vm.current = response.data.criminal;
			});
	}
<<<<<<< HEAD

}

module.exports = CriminalsShowController;
=======
}

module.exports = CriminalsShowController;
>>>>>>> 5589bc133bafa8ca4d606b05ef423dfa48528eb5
