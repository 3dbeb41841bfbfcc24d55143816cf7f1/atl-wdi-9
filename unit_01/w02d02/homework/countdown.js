// General Assembly, WDI (Web Development Immersive) Remote, Cohort 04 (Matey)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

window.onload = function(){
  var timerVal = 100;
  

  var countDown = function(){
    if (timerVal >= 0) {
      // Trigger All TimerUI Methods //
      
      for (var key in timerUI) {
        timerUI[key](timerVal);
      }
      //timerUI.drawNumericDisplay(timerVal);  <-- don't need this call, taken care of the for statement
      timerVal -= 1;
      setTimeout(countDown, 200);
    }
  };
  countDown();
};