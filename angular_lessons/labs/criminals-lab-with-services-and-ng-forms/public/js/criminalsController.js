angular.module('InfamousCriminals')
  .controller('CriminalsController', CriminalsController);

<<<<<<< HEAD
CriminalsController.$inject = ['CriminalServices'];
function CriminalsController(CriminalServices){
=======
CriminalsController.$inject = ['CriminalsService'];

function CriminalsController(CriminalsService){
>>>>>>> c1ba13c7fa4e87d2c0547a57d23dadaff121eeef
  var self = this;
  self.all = [];
  self.addCriminal = addCriminal;
  self.newCriminal = {};
  self.deleteCriminal = deleteCriminal;
  self.getCriminals = getCriminals;

  getCriminals();

  function getCriminals(){
<<<<<<< HEAD
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
=======
    CriminalsService.getCriminals().then(function (criminalsData) {
      self.all = criminalsData;
    });
  }

  function addCriminal(){
   CriminalsService.addCriminal(self.newCriminal).then(function(){
     self.getCriminals();
       self.newCriminal = {};
   });
  }

  function deleteCriminal(criminal){
    CriminalsService.deleteCriminal(criminal)
      .then(function(response){
>>>>>>> c1ba13c7fa4e87d2c0547a57d23dadaff121eeef
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
