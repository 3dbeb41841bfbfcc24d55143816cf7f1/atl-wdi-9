angular
.module('InfamousCriminals')
.controller('CriminalsController', CriminalsController)
.service('CriminalsService', CriminalsService);

CriminalsController.$inject = ['CriminalsService'];

function CriminalsController(CriminalsService) {
  var self = this;
  self.criminalFromService = CriminalsService.criminal;

}

  function CriminalsService() {
  console.log('Criminals are alive!');
  
  var self = this;
  self.criminal = 'The Criminals says Hi ';
}

function CriminalsController($http){
  var self = this;
  self.all = [];
  self.addCriminal = addCriminal;
  self.newCriminal = {};
  self.getCriminals = getCriminals;
  self.deleteCriminal = deleteCriminal;

  getCriminals();
  function getCriminals(){
    $http
      .get('/criminals')
      .then(function(response){
        self.all = response.data.criminals;
    });
  }

  function addCriminal(){
    $http
      .post('/criminals', self.newCriminal)
      .then(function(response){
        getCriminals();
    });
    self.newCriminal = {};
  }

  function deleteCriminal(criminal){
    $http
      .delete("/criminals/" + criminal._id)
      .then(function(response){
        var index = self.all.indexOf(criminal);
        self.all.splice(index, 1);
      });
  }

}
