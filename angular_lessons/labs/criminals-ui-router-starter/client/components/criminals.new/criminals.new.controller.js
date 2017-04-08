CriminalsNewController.$inject = ['$stateParams', 'CriminalsService'];

function CriminalsNewController() {
	const vm = this;

	vm.current = {};

	activate();

	function activate() {
		addNewCriminals();
	}

	function addNewCriminals () {
		AboutCriminals
			.addNewCriminals
			.then(function resolve(response) {
				vm.add = response.data.criminal;
			});
	}
}

module.exports = CriminalsNewController;