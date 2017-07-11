// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// DO NOT EDIT ABOVE THIS LINE ///

////// WRITE A FUNCTION THAT TAKES ___ AS INPUT AND RETURNS ___ AS OUTPUT //////

// #1
// Input: an array of numbers
// Output: the sum of the numbers that were passed in
// Edge Case: If the array is empty, return 0
var testArray =  [5, 88, 18, 10];

var sumOfNums = function (numsArray) {
  if (numsArray === []) { return 0; }
  
  var returnSum = 0;
  for (var i = 0; i < numsArray.length; i++) {
    returnSum = returnSum + numsArray[i];
  }
  return returnSum;
};

console.log("1)", sumOfNums(testArray));
// #2
// Input: an array of numbers
// Output: an array of the numbers from the first array that are strictly
//         greater (i.e. greater than but not equal to) than 10

var numsGreaterThanTen = function(numsArray){
  var returnArray = [];
  var counter = 0;
  for (var i = 0; i < numsArray.length; i++) {
    if (numsArray[i] > 10) {
      returnArray[counter] = numsArray[i];  //probably better to use push
      counter ++;
    }
  }
  return returnArray;  
};

console.log("2)", numsGreaterThanTen(testArray));
// #3
// Input: an array of numbers
// Output: `true` if ALL numbers passed in are strictly greater than 10;
//         `false` otherwise
// Edge Case: If the input array is empty, the function should return `true`.
var allGreaterThanTen = function(numsArray){
  if (numsArray === []) { return true; } 
  
  for (var i = 0; i < numsArray.length; i++) {
    if (numsArray[i] <= 10) {
      return false
    }
  }
  return true;
};

console.log("3)", allGreaterThanTen(testArray));

// #4
// Input: an array of words
var arrayOfWords = ["juice", "bop", "cocaine", "freethrow", "apple"];
// Output: an array of all words from the first array with five or more letters
var wordsWithAtLeastFiveLetters = function(words) {
  var returnArray = [];
  for (var i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      returnArray.push(words[i]);
    }
  }
  return returnArray;
};

console.log("4)", wordsWithAtLeastFiveLetters(arrayOfWords));

// #5
// Input: an array of words
// Output: `true` if ALL words start with the letter 'a' (case-insensitive),
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var allStartingWithA = function(words){
  if (words === []) { return true; }
  
  for (var i = 0; i < words.length; i++) {
    
    if (words[i].charAt(0) !== 'a') {
      return false
    }
  }
  return true
};

console.log("5)", allStartingWithA(arrayOfWords));
// #6
// Input: an array of words
// Output: `true` if there are ANY words that start with the letter 'b'
//          (case-insensitive), `false` otherwise
var anyStartingWithB = function(words){
  
  for (var i = 0; i < words.length; i++) {
    
    if (words[i].charAt(0) === 'b') {
      return true
    }
  }
  return false
};

console.log("6)", anyStartingWithB(arrayOfWords));


// #7
// Input: a single word and a number (`n`)
var wordTest1 = "snake";
var wordTest2 = "queen";
var vowels = "aeoiu"

// Output: `true` if the word has at least some number (`n`) of vowels,
//          `false` otherwise
//    Assume that vowels are 'a', 'e', 'i', 'o', and 'u' (NOT 'y')
// Edge Case: If `n` is less than zero, return `null`.
var hasAtLeastNVowels = function(word, n){
  if (n < 0) { return null;}
  var vowelCounter = 0;
  
  for (var i = 0; i < word.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
       if (word[i] === vowels[j]) {
         vowelCounter ++;
         break;
       }
    }
  }  
  if (vowelCounter >= n) {
    return true;
  } else {
    return false;}
};

console.log("7)", hasAtLeastNVowels(wordTest1,2));
console.log("7)", hasAtLeastNVowels(wordTest2,2));
console.log("7)", hasAtLeastNVowels(wordTest2,3));
console.log("7)", hasAtLeastNVowels(wordTest2,4));

// #8
// Input: an array of words
// Output: an array of words from the original array that have at least two
//          vowels

var wordsWithAtLeastTwoVowels = function(words){
  var returnArray = [];
  
  for (var i = 0; i < words.length; i++) {
    if (hasAtLeastNVowels(words[i],2)) {
      returnArray.push(words[i]);
    }
  }
  return returnArray;
};

console.log("8)", wordsWithAtLeastTwoVowels(arrayOfWords));

var arrayOfWords2 = ["ate", "cheese"];
var arrayOfWords3 = ["top", "a", "stop"];
// #9
// Input: an array of words
// Output: `true` if ALL words have two or more vowels, `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var allHaveAtLeastTwoVowels = function(words){
  if (wordsWithAtLeastTwoVowels(words).length === words.length) {
    return true;
  } else {
    return false;
  }
};

console.log("9)", allHaveAtLeastTwoVowels(arrayOfWords));
console.log("9)", allHaveAtLeastTwoVowels(arrayOfWords2));
console.log("9)", allHaveAtLeastTwoVowels(arrayOfWords3));
// #10
// Input: an array of words
// Output: `true` if there are ANY words have two or more vowels,
//          `false` otherwise.
var anyHaveAtLeastTwoVowels = function(words){
  if (wordsWithAtLeastTwoVowels(words).length >= 1) {
    return true;
  } else {
    return false;
  }
};

console.log("10)", anyHaveAtLeastTwoVowels(arrayOfWords));
console.log("10)", anyHaveAtLeastTwoVowels(arrayOfWords2));
console.log("10)", anyHaveAtLeastTwoVowels(arrayOfWords3));
// #11
// Input: an array of words
// Output: `true` if NONE of the words have two or more vowels,
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var noneHaveTwoOrMoreVowels = function(words){
  if (words === []) { return true; }
  if (wordsWithAtLeastTwoVowels(words).length === 0) {
    return true;
  } else {
    return false;
  }
};

console.log("11)", noneHaveTwoOrMoreVowels(arrayOfWords));
console.log("11)", noneHaveTwoOrMoreVowels(arrayOfWords2));
console.log("11)", noneHaveTwoOrMoreVowels(arrayOfWords3));

// #12
var arrayOfWords4 = ['cat', 'horse', 'elephant'];
//      return { cat: 3, horse: 5, elephant: 8}

// COULDN'T GET 12 TO WORK
/*var buildObjectFromWords = function(words) {
  var returnObject =  {};
  
  for (var i = 0; i < words.length; i++) {
    returnObject.prototype.words[i];
    returnObject.words[i] = words[i].length;
  }
  return returnObject;
};
console.log("12)", buildObjectFromWords(arrayOfWords4));
*/

  // Your Code Here



/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  sumOfNums: sumOfNums,
  numsGreaterThanTen: numsGreaterThanTen,
  allGreaterThanTen: allGreaterThanTen,
  wordsWithAtLeastFiveLetters: wordsWithAtLeastFiveLetters,
  allStartingWithA: allStartingWithA,
  anyStartingWithB: anyStartingWithB,
  hasAtLeastNVowels: hasAtLeastNVowels,
  wordsWithAtLeastTwoVowels: wordsWithAtLeastTwoVowels,
  allHaveAtLeastTwoVowels: allHaveAtLeastTwoVowels,
  anyHaveAtLeastTwoVowels: anyHaveAtLeastTwoVowels,
  noneHaveTwoOrMoreVowels: noneHaveTwoOrMoreVowels,
  buildObjectFromWords: buildObjectFromWords
}
