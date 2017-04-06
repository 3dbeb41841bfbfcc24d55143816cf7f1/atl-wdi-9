function CriminalsListController(CriminalsService) {
	var vm = this;

	CriminalsService.getCriminals()
		.then(function (criminalsList) {
			vm.criminalsList = criminalsList;
		})

	vm.greeting = "jsfjsjdfsfjskdfjs";
	vm.message = CriminalsService.message;

}

CriminalsListController.$inject = ['CriminalsService'];

module.exports = CriminalsListController;
