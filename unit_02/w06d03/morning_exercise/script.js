//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
  return (total - small * 60) / large; 	
};

//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
   const circumference = 24901;
   return (circumference / milesPerGallon * fuelPrice);
};

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(a, b, c, d){
  var total_juice = a + c;
  var total_pure_juice = a * b / 100 + c * d / 100;
  return total_pure_juice / total_juice;
};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
