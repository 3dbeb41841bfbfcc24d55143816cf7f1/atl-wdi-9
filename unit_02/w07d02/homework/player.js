console.log('player file is loaded');

var player = {
  name: "Neo",
  feedTamagotchi: function(tamagotchi) {
    tamagotchi.foodInTummy++;
    console.log('YUM!!! ' + tamagotchi.name + ' has been fed and now has: ' + tamagotchi.foodInTummy + ' in the tummy');
  },
  medicateTamagotchi: function(tamagotchi) {
    tamagotchi.health++;
    console.log(tamagotchi.name + ' has been medicated and now has health: ' + tamagotchi.health);
  },
  knockOutTamagotchi: function(tamagotchi) {
    tamagotchi.restedness++;
    console.log(tamagotchi.name + ' got some Zzzzs! Restedness: ' + tamagotchi.restedness);
  }
};


//click events

$(function() {
  $("#feed1").on('click', () => {
    player.feedTamagotchi(x);
  })
  $("#feed2").on('click', () => {
    player.feedTamagotchi(y);
  })
  $("#rest1").on('click', () => {
    player.knockOutTamagotchi(x);
  })
  $("#rest2").on('click', () => {
    player.knockOutTamagotchi(y);
  })
  $("#health1").on('click', () => {
    player.medicateTamagotchi(x);
  })
  $("#health2").on('click', () => {
    player.medicateTamagotchi(y);
  })
});

//end player
