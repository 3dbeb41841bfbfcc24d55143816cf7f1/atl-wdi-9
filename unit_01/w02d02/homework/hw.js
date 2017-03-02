// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function(timerValue){
    var timerDisp = document.getElementById('numeric-display');
    timerDisp.innerHTML = timerValue;
  },
  drawProgressBars: function(timerValue){
    var timeElapse = 100 - timerValue;
    document.getElementsByClassName('progress-bar')[0].style.width = timeElapse + '%';  //needed help with that bit
    
  //var showBar = document.getElementById('progress-bars');
  //var makeBar = document.createElement('w3-light-grey');                 // Create a <li> node
  //var updateBar = document.createElement("'w3-grey' style='height:24px;width:timerValue + %'");         // Create a text node
  //showBar.appendChild(makeBar); 
  //makeBar.appendChild(updateBar);
  },
  drawLitFuses: function(timerValue){
    var unburnt = (timerValue / 100) * 98; 
    var burnt = 1 - unburnt;
    document.getElementsByClassName('unburnt')[0].style.width = unburnt + '%';
    //don't need to reference flame because it falls after unburnt inbetween burnt
    document.getElementsByClassName('burnt')[0].style.width = burnt + '%';

  },
  drawCrawlers: function(timerValue){
    var crawlerPosition = (100 - timerValue) * 10;
    if (Math.random() > .9) { //random element to give "life" to the crawler
      document.getElementsByClassName('crawler')[0].style.marginTop = '30px';
    } else if (Math.random() > .8) {
        document.getElementsByClassName('crawler')[0].style.marginTop = '-30px';
    } else if (timerValue%2 === 0) {
      document.getElementsByClassName('crawler')[0].style.marginTop = '10px';
    } else {
      document.getElementsByClassName('crawler')[0].style.marginTop = '-10px';
    }
    
    document.getElementsByClassName('crawler')[0].style.marginLeft = crawlerPosition + 'px';
    

  }
};
