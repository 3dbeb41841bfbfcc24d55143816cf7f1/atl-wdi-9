// ** BULLSEYE ** //

// STEP 1:  Add click handlers to update the score to be:
//          100 points - Bullseye
//           50 points - Middle Ring
//           10 points - Outer Ring
//            0 points - Miss  (done for you)

// STEP 2: Break down the updateScore method, write a paragraph or comment
//         how the function works line by line

// STEP 3:  Highlight the element that was clicked on
//          using the CSS `background-color: yellow`
// BONUS:  Implement setTimeout so the background is yellow for only two seconds

// EXPLORATION: Comment out event.stopPropagation in each function, and then click
//              the inner ring. What happens?



window.onload = function() {
  var body = document.body;
  var ring1 = document.querySelector('.ring-1');
  var ring2 = document.querySelector('.ring-2');
  var ring3 = document.querySelector('.ring-3');

  body.addEventListener('click', bullseyeGame.miss);
  ring1.addEventListener('click', bullseyeGame.outerRing);
  ring2.addEventListener('click', bullseyeGame.middleRing);
  ring3.addEventListener('click', bullseyeGame.bullseye);
}


var bullseyeGame = {  //bullseyeGame if an object made of score, updateScore, miss, bulleye, etc...
  score: 0,

  updateScore: function(points) {
    var scoreElement = document.querySelector('.score');
    this.score += points;  //what is this doing in here
    scoreElement.innerHTML = `${this.score} points`;
  },

  miss: function(event) {
    event.stopPropagation();
    
    setTimeout(function() {
      bullseyeGame.updateScore(0); //is this necesssary?
      //alert('YOU MISSED');
      document.body.style.backgroundColor = 'white';
    // [ALERT:] needs to be bullseyeGame because this in clickEvents refers to the html
    // element that was clicked
    },2000)
    document.body.style.backgroundColor = 'yellow';
  },

  bullseye: function(event) {
    event.stopPropagation();  //???
    var bullseye = this;  //powerful line makes bullseye = "this" element, makaing it easy to reference the color change
    
    setTimeout(function() {
      bullseyeGame.updateScore(100);
      //alert('bullseye was clicked');
      bullseye.style.backgroundColor = 'blue';
    },2000)
    bullseye.style.backgroundColor = 'yellow';
  },

  middleRing: function(event) {
    event.stopPropagation();
    var middleRing = this;

    setTimeout(function() {
      bullseyeGame.updateScore(50);
      //alert('middleRing was clicked');
      middleRing.style.backgroundColor = 'green';
    }, 2000)
    middleRing.style.backgroundColor = 'yellow';
  },

  outerRing: function(event) {
    event.stopPropagation();
    var outerRing = this;

    setTimeout(function() {
      bullseyeGame.updateScore(10);
      //alert('outerRing was clicked');
      outerRing.style.backgroundColor = 'red';  //I tried using "this" instead of outerRing: it did not work!!!
    }, 2000)
    this.style.backgroundColor = 'yellow';
  }
}