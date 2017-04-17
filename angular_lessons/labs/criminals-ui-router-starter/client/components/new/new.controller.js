NewController.$inject = ['CriminalsService'];

function NewController(CriminalsService) {
	const vm = this;

	vm.addNewCriminal = addNewCriminal;
	vm.newCriminal = {};

	activate();

	function activate() {
		addNewCriminal();
	}

	function addNewCriminal (){
		CriminalsService
			.addCriminal(vm.newCriminal).then(function () {
				//go to getCriminals show
				vm.newCriminal = {};
				
			});

	}
}

module.exports = NewController;
