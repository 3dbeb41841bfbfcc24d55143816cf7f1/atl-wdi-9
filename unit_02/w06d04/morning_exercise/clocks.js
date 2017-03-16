var calculate = function(hourhand, minutehand) {
  var hourAngle = hourhand * 30 + minutehand * 0.5;
  var minuteAngle = minutehand * 6;
  if (hourAngle > 360 && hourhand === 12)  {
    hourAngle -=  360}
 
  var calReturn = [hourAngle, minuteAngle];
  
  if (hourAngle < 0 || hourAngle > 360 || minuteAngle < 0 || minuteAngle > 360) 
  	return "out of range";
  else return calReturn;
};

clock(6, 00)    //returns [180, 180]
clock(12, 00)   //returns [360, 0]
clock(12, 15)   //returns [82.5, 277.5]
clock(9, 45)    //returns [22.5, 337.5]
clock(1, 59)    //returns [294.5, 65.5]
clock(500, 34)  //returns "out of range"
clock(-6, 00)   //returns "out of range"


// DO NOT EDIT BELOW THIS LINE //
module.exports = {
  calculate: calculate
};

