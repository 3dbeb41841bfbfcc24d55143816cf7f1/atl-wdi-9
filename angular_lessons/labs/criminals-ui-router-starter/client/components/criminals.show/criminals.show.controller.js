CriminalsShowController.$inject = ['$stateParams', 'CriminalsService'];

function CriminalsShowController($stateParams, CriminalsService) {
	const vm = this;

	vm.current = {};

	activate();

	function activate() {
		loadCurrentCriminal();
	}

	function loadCurrentCriminal() {
		CriminalsService
			.loadCurrent($stateParams.criminalId)
			.then(function resolve(response){
				vm.current = response.data.criminal;
			});	
	}
}

module.exports = CriminalsShowController;
