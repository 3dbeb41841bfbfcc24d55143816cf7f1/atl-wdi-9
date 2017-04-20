CriminalsShowController.$inject = ['$stateParams', 'CriminalsService'];

function CriminalsShowController($stateParams, CriminalsService) {
	const vm = this;

	vm.current = {};

	activate();

	function activate() {
<<<<<<< HEAD
<<<<<<< HEAD
		loadCurrentCriminals();
	}

	function loadCurrentCriminals() {
=======
=======
>>>>>>> 05492c7a07476f2408630e07c04047cee1b2c78b
		loadCurrentCriminal();
	}

	function loadCurrentCriminal() {
		console.log($stateParams);

<<<<<<< HEAD
>>>>>>> 5589bc133bafa8ca4d606b05ef423dfa48528eb5
=======
>>>>>>> 05492c7a07476f2408630e07c04047cee1b2c78b
		CriminalsService
			.loadCurrent($stateParams.criminalId)
			.then(function resolve(response) {
				vm.current = response.data.criminal;
			});
	}
<<<<<<< HEAD
<<<<<<< HEAD

}

module.exports = CriminalsShowController;
=======
}

module.exports = CriminalsShowController;
>>>>>>> 5589bc133bafa8ca4d606b05ef423dfa48528eb5
=======
}

module.exports = CriminalsShowController;
>>>>>>> 05492c7a07476f2408630e07c04047cee1b2c78b
