console.log('tamagotchi file is loaded');


function Tamagotchi (name, creatureType) {
  this.name         = name;
  this.creatureType = creatureType;
  this.foodInTummy  = 10;
  this.restedness   = 10;
  this.health       = 10;
  this.cry          = function () {
    this.foodInTummy--;
    console.log(this.name + ' tummy is ' + this.foodInTummy);
    console.log('WAAH!');
  }
  this.puke         = function () {
    this.foodInTummy--; //the directions say food, but they probably mean health
    this.health--
    console.log(this.name + 'puked. Yuck! Yuck! Food is ' + this.foodInTummy + ', and your health is ' + this.health);
  }
  this.yawn         = function () {
    this.restedness--;
    console.log(this.name + 'is tired. Yawn! Restedness: ' + this.restedness);
  }
  this.start = function(){
    console.log("Go!!! " + this.name + '!');
    var self = this;
    this.hungerTimer = setInterval(function() {
      self.cry();
    }, 6000);
    this.yawnTimer = setInterval(function() {
      self.yawn();
    }, 10000);
    this.sickTimer = setInterval(function() {
      self.puke();
    }, 25000);
  }
  this.stop = function(){
    console.log("Stop " + this.name + "!");
    clearInterval(this.hungerTimer);
    clearInterval(this.yawnTimer);
    clearInterval(this.sickTimer);
  }
}


//create new Tamagotchis

var x = new Tamagotchi("Bob", "froggie");
var y = new Tamagotchi("Fredricka", "lizardgirl");

$(function() {
  $("#start1").on('click', () => {
    x.start();
  })
  $("#start1").on('click', () => {
    y.start();
  })
  $("#stop1").on('click', () => {
    x.stop();
  })
  $("#stop2").on('click', () => {
    y.stop();
  })
});

$('#food1').html(x.foodInTummy);



//test out your Tamagotchies below via console.logs
