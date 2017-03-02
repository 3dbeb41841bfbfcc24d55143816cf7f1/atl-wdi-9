window.onload = function() {
	var b1 = document.getElementById('b1');
	var b2 = document.getElementById('b2');
	var b3 = document.getElementById('b3');
	

	b1.addEventListener("click", function(event){
		alert("you have clicked button one");
	});
	
	b2.addEventListener("click", function(event) {
	 	var node = document.createElement('p');                 
	 	var textnode = document.createTextNode("A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback).");         // Create a text node
	 	var whereToAppend = document.getElementById('information');
		node.setAttribute("id", "node");
		node.appendChild(textnode);               
	 	whereToAppend.appendChild(node);     
	}); 

	b3.addEventListener("click", function(event){
		
		var wheretoRemove = document.getElementById('information');
		wheretoRemove.removeChild(wheretoRemove.firstChild);
	});
    
}

/*
window.onload = function() {
    // Button one, when clicked, should trigger an alert saying "you have clicked button one"
    // Button two, when clicked, should trigger a function that creates a <p> with the following string:
    // A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback).
    // and appends it to the DOM in the <div id="information">.
    // Button three, when clicked, should remove the p tag from the DOM
    var buttonOne = document.querySelector('#buttonOne');
    var buttonTwo = document.querySelector('#buttonTwo');
    var buttonThree = document.querySelector('#buttonThree');
    buttonOne.addEventListener("click", function() {
        alert('You have clicked button one.');
    });
    buttonTwo.addEventListener("click", function() {
        var newPar = document.createElement('p');
        var newNode = document.createTextNode("A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback).");
        var newDiv = document.getElementById('information');
        newPar.setAttribute("id", "newPar");
        newPar.appendChild(newNode);
        newDiv.appendChild(newPar);
    });
    buttonThree.addEventListener("click", function() {
        var newDiv = document.getElementById('information');
        var newPar = document.getElementById('newPar');
        newDiv.removeChild(newPar);
    });
}
*/