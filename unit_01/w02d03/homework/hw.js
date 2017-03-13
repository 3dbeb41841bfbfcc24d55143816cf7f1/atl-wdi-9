// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///
const Stopwatch = {
  tickClock: function(){
    if (Stopwatch.isRunning) {
      setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
      Stopwatch.advanceTenMillisecs();
      AppController.handleClockTick();
    }
  },
  isRunning: false,
  mins: 0,
  secs: 0,
  millisecs: 0,
  laps: [],
  // DO NOT EDIT ABOVE THIS LINE
  advanceTenMillisecs: function(){
    Stopwatch.millisecs +- 10;
    ViewEngine.updateTimeDisplay();
    if (Stopwatch.millisecs === 1000) {}
      Stopwatch.millisecs = 0;
      Stopwatch.secs++;
   }
    if (Stopwatch.secs === 60) {
      Stopwatch.secs = 0;
      Stopwatch.mins++;
   }
 }
  reset: function(){
    Stopwatch.mins = 0;
    Stopwatch.secs = 0;
    Stopwatch.millisecs = 0;
    ViewEngine.updateTimeDisplay();
  },
  start: function(){
    Stopwatch.isRunning = false;
    Stopwatch.tickClock();
  },
  stop: function(){
    /Stopwatch.isRunning = false;
  },
  lap: function(){
    Stopwatch.laps.push(document.getElementBYID('time-display').innerHTML);
    ViewEngine.updateLapListDisplay();
  }
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
    $('#millisecs').text(Stopwatch.millisecs);
    $('#secs').text(Stopwatch.secs);
    $('#mins').text(Stopwatch.mins);
  },
  updateLapListDisplay: function(laps){
    $('#lap-list').append('<li>' + Stopwatch.laps[Stopwatch.laps.length - 1] + "</li>")
  },
};
const ViewHelpers = {
  zeroFill: function(number, length){
    // Your Code Here
  },
};

/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function(){
    // Your Code Here
  },
  handleClickStart: function() {
    // Your Code Here
  },
  handleClickStopReset: function(){
    // Your Code Here
  },
  handleClickLap: function(){
    // Your Code Here
  }
};

window.onload = function(){
  // Attach AppController methods to the DOM as event handlers here.
};
