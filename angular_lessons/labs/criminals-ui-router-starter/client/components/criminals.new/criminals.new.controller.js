<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> 05492c7a07476f2408630e07c04047cee1b2c78b
CriminalsNewController.$inject = ['$state', 'CriminalsService'];

function CriminalsNewController($state, CriminalsService) {
	const vm = this;

	vm.createCriminal = createCriminal;
	vm.newCriminal = {};

	activate();

	function activate() {}

	function createCriminal() {
		CriminalsService
			.create(vm.newCriminal)
			.then(function resolve(response) {
				const id = response.data.criminal._id;
				$state.go('criminalsShow', { criminalId: id });
<<<<<<< HEAD
>>>>>>> 5589bc133bafa8ca4d606b05ef423dfa48528eb5
=======
>>>>>>> 05492c7a07476f2408630e07c04047cee1b2c78b
			});
	}
}

<<<<<<< HEAD
<<<<<<< HEAD
module.exports = CriminalsNewController;
=======
module.exports = CriminalsNewController;
>>>>>>> 5589bc133bafa8ca4d606b05ef423dfa48528eb5
=======
module.exports = CriminalsNewController;
>>>>>>> 05492c7a07476f2408630e07c04047cee1b2c78b
