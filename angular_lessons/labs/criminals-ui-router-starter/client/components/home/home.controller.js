<<<<<<< HEAD
 HomeController.$inject = [];

 function HomeController() {
 	const vm = this;
 }

 module.exports = HomeController;
=======
HomeController.$inject = [];

function HomeController() {

  // WHAT THIS CONTROLLER HAS / DOES THAT IS CONNECTED TO THE VIEW
  const vm = this;

  // activate === BEST PRACTICE, ALWAYS DO IT, EVEN IF EMPTY
  activate();

  function activate() {

  }
}

module.exports = HomeController;
>>>>>>> 5589bc133bafa8ca4d606b05ef423dfa48528eb5
