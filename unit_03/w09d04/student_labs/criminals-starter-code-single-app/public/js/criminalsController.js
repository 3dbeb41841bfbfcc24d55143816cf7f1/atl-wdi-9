angular
	.module('InfamousCriminals')
	.controller('CriminalsController', CriminalsController);

	CriminalsController.$inject = ['$http'];

	function CriminalsController($http){
		var vm = this;

		vm.addCriminal = addCriminal;  //function
		vm.all = [];
		vm.loadingAll = true;
		vm.newCriminal = {} //object;
		vm.removeCriminal = removeCriminal;
		vm.loadCriminals = loadCriminals;
		vm.editCriminal = editCriminal;
		vm


		activate();

		function activate() {
			loadCriminals();
		}

		function addCriminal() {
			$http
				.post('/criminals', vm.newCriminal)
				.then(function addNew(response) {
					vm.all.push(response.data.criminal);
				})
				vm.newCriminal = {};
		}

		function loadCriminals() {
			$http
				.get('/criminals')
				.then(function(response) {
					vm.all = response.data.criminals;
					vm.loadingAll = false; //how does loadingAll becomone
					 // true again?
				});
		}

		function editCriminal(criminal) {
			$http
				.patch('/criminals/' + criminal._id, criminal)
				.then(function(response){
					criminal.toggle = false
				}) 
		};

		function removeCriminal(criminal) {
			$http
				.delete('/criminals/' + criminal._id)
				.then(function reset(response) {
					var index = vm.all.indexOf(criminal);
					vm.all.splice(index, 1);
				})

		}
	}