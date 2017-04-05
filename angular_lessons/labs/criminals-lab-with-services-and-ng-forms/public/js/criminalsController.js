angular.module('InfamousCriminals')
  .controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['CriminalServices'];
function CriminalsController(CriminalServices){
  var self = this;
  self.all = [];
  self.addCriminal = addCriminal;
  self.newCriminal = {};
  self.deleteCriminal = deleteCriminal;
  self.getCriminals = getCriminals;

  getCriminals();

  function getCriminals(){
    CriminalServices.getCriminals()
      .then(function(criminalsData){
        self.all = criminalsData;
    });
  }

 function addCriminal(){
    CriminalServices.addCriminal(self.newCriminal).then(function(){
      self.getCriminals();
      self.newCriminal = {};
    }) 
  }

  function deleteCriminal(criminal){
    CriminalServices.deleteCriminal(criminal).then(function(response){
        var index = self.all.indexOf(criminal);
        self.all.splice(index, 1);
    });
  }
}

angular.module('InfamousCriminals')
  .controller('validateCtrl', validateCtrl); 

function validateCtrl(){
  var vm = this;
  
  vm.formData = {
    name: '',
    location: '',
    status: ''
  };
  
  vm.submitForm = function () {
    alert("Send a request to the server: " + JSON.stringify(vm.formData));
  };
};
