var index = Math.floor(Math.random() * diceRolls.length); //start at a random place in the array
var maxDiceRoll = 32


function increaseIndex() { //go to the next number. If its the end of the array, go back to the front
  if (index < diceRolls.length-1) {
      index ++;
  } else {
    index = 0;
  }
}

var result = "---"
var finalDiceSize = "---";

// Make all die except the passed diceID faded
function fadeDice(diceID) {
  for (var i = 1; i <= 6; i++) {
      var item = document.getElementById(i);
      item.classList.remove("inactive");
  }

  for (var i = 1; i <= 6; i++) {
    if(i != diceID) {
      var item = document.getElementById(i);
      item.className += " inactive";
    }
  }
}

//Get dice size from argument, set to the global variable
function getDiceSize(diceSize) {
  finalDiceSize = diceSize;
  return finalDiceSize;
}

// When a dice button is clicked, fade all dice except for clicked dice, set dice size
function rollDice(diceID, diceSize) {
  fadeDice(diceID);
  getDiceSize(diceSize);
}

//Get the loader bar at the bottom of the screne to display answer after one second
function load() {
  document.getElementById("result").style.display = "none";
  document.getElementById("loader").style.display = "block";

  setTimeout(function() {
    document.getElementById("result").style.display = "block";
    document.getElementById("loader").style.display = "none";
  }, 1000);
}

//Retrieves parameters, increases index and retrieves value from pre-generated random sequence, calculates roll
function roll() {
  load()
  if (Number.isNaN(result)) {
    result = "---";
  }
  if (finalDiceSize == "---") {
    result = "---";
  } else {
    increaseIndex();
    var normalizedRoll = (diceRolls[index] + 1)/maxDiceRoll;
    result = Math.ceil(normalizedRoll * finalDiceSize);
  }
  document.getElementById("result").innerHTML = result;
}