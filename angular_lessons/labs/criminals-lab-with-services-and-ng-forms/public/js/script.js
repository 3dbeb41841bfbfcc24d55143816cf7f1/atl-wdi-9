angular.module('Infamous Criminals',['view.moreless'])
  .controller('demoController',($scope,$timeout)=>{
     let sampleList = ['Item1','Item2','Item3','Item4','Item5','Item6','Item7','Item8'];
     //static list
     $scope.staticList = sampleList;
     //generate dynamic list
     $scope.isLoading = true;
     $timeout(function(){
       $scope.deferredList = sampleList;
       $scope.isLoading = false;
     },3000)
     
  });