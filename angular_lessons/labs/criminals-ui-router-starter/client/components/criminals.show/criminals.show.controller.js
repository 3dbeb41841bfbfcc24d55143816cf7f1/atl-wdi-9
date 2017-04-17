CriminalsShowController.$inject = ['$stateParams', 'CriminalsService'];

function CriminalsShowController($stateParams, CriminalsService) {
	const vm = this;

	vm.current = {};

	activate();

	function activate() {
		loadCurrentCriminal();
	}

	function loadCurrentCriminal() {
<<<<<<< HEAD
		CriminalsService
			.loadCurrent($stateParams.criminalId)
			.then(function resolve(response){
				vm.current = response.data.criminal;
			});	
=======
		console.log($stateParams);

		CriminalsService
			.loadCurrent($stateParams.criminalId)
			.then(function resolve(response) {
				vm.current = response.data.criminal;
			});
>>>>>>> 5589bc133bafa8ca4d606b05ef423dfa48528eb5
	}
}

module.exports = CriminalsShowController;
