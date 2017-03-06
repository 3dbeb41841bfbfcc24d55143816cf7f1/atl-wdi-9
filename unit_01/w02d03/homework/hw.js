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
    this.millisecs += 10;
    if (this.millisecs >= 1000) {
      this.millisecs = 0;
      this.secs++;
    }
    if (this.secs >= 60) {
      this.secs = 0;
      this.mins++;
    }
    if (this.mins >= 60) {
      this.min = 0
    }
  },
  reset: function(){
    this.mins = 0;
    this.secs = 0;
    this.millisecs = 0;
    this.laps = [];
  },
  start: function(){
    console.log ("Stopwatch.start()");
    this.isRunning = true;
    this.tickClock();
  },
  stop: function(){
    this.isRunning = false;
  },
  lap: function(){
    // Your Code Here
  }
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
    document.getElementById('mins').innerHTML = mins;
    document.getElementById('secs').innerHTML = secs;
    document.getElementById('millisecs').innerHTML = millisecs;
  },
  updateLapListDisplay: function(laps){
    // Your Code Here
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
    ViewEngine.updateTimeDisplay(Stopwatch.mins, Stopwatch.secs, Stopwatch.millisecs);
  },
  handleClickStart: function() {
    if (Stopwatch.isRunning === false) 
      {Stopwatch.start();}
  },
  handleClickStopReset: function(){
    if (Stopwatch.isRunning === true)
      {Stopwatch.stop();}
  },
  handleClickLap: function(){
    // Your Code Here
  }
};

window.onload = function(){
  document.getElementById('start').onclick = AppController.handleClickStart;
  document.getElementById('lap').onclick = AppController.handleClickLap;
  document.getElementById('stop').onclick = AppController.handleClickStopReset;
};
