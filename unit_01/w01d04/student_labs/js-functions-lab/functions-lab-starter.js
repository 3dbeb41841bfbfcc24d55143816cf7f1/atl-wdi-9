// Question 1
function maxOfTwoNumbers(x, y) {
  if (x > y) {
  	return x;
  }
  else if (x === y) {
  	console.log("Same vakue!");
  	return x;
  }
  else if (x < y) {
  	return y;
  }
  else {
  	alert("Type mismatch error!")
  }
}

// Question 2
function maxOfThree(x, y, z) {
  if (x >= y && x >= z) {
  	return x;
  }
  else if (y >= z) {
  	return y;
  }
  else if (z > y) {
  	return z;
  }
  else {
  	alert ("Type mistatch error")
  }
}

// Question 3
function isCharacterAVowel(x) {
  var returnVal = true;
  x = x.toLowerCase(); 
  switch(x) {
    case "a":
        break;
    case "e":
        break;
    case "i":
        break;
    case "o":
    	break;
    case "u":
    	break;
    default:
    	returnVal = false;
    }
  return returnVal;
}


// Question 4
function sumArray(testArray) {
 var returnVal = 0;
 for (var i = 0; i < testArray.length; i++) {
 	returnVal = returnVal + testArray[i];
 }
 return returnVal;
}


// Question 4
function multiplyArray(testArray) {
 var returnVal = 1;
 for (var i = 0; i < testArray.length; i++) {
 	returnVal = returnVal * testArray[i];
 }
 return returnVal;
} 



// Question 5
var numberOfArguments = function(){
  return arguments.length;
}


// Question 6
var reverseString = function (dummyStr){
  var arrayStr = dummyStr.split("");
  var revArrayStr = arrayStr.reverse();
  var backtoStr = revArrayStr.join("");

  return backtoStr;
};


// Question 7

// var arrayT = ["help", "friend", "wet"];

function findLongestWord (arrayTest) {  //an array of strings
  var longestWord = arrayTest[0];
  for (var i = 1; i < arrayTest.length; i++) {
  	if (arrayTest[i].length>longestWord.length) {
  		longestWord = arrayTest[i];
  	}  
  }
  return longestWord.length;
}
// findLongestWord (arrayT);
f

//	Question 8
function filterLongWords (arrayTest, filter) {
  var returnArrayofStr = [];
  var counter = 0
  for (var i = 0; i < arrayTest.length; i++) {
    if (arrayTest[i].length > filter) {
      returnArrayofStr[counter] = arrayTest[i];
      counter ++;
    }
  }
  return returnArrayofStr;
}





// Bonus 1
//??????




// Bonus 2
function charactersOccurencesCount() {
  
}

