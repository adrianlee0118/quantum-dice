var index = Math.floor(Math.random() * diceRolls.length); //start at a random place in the array
var maxDiceRoll = 32;
var result1 = "-----";
var result2 = "";

//Retrieves parameters, increases index and retrieves value from pre-generated random sequence, calculates roll(s)
function roll(dicesize) {
  load()
  var times = document.getElementById("times").value;
  var bonus = document.getElementById("bonus").value;
  var btype = "bonus";
  if (bonus < 0){
    btype = "handicap";
  }

  var res = [];
  for (i = 0; i < times; i++){
    increaseIndex();
    var normalizedRoll = Math.ceil(((diceRolls[index] + 1)/maxDiceRoll)*dicesize);
    res.push(normalizedRoll+bonus);
  }
  result1 = `You rolled a ${dicesize}-sided die ${times} times with a ${bonus} ${btype}`
  result2 = 
  
  document.getElementById("result1").innerHTML = result;
}

//Get the answer area to display a loading gif for 1 second before displaying the answer
function load() {
  document.getElementById("result1").style.display = "none";
  document.getElementById("loader").style.display = "block";

  setTimeout(function() {
    document.getElementById("result1").style.display = "block";
    document.getElementById("loader").style.display = "none";
  }, 1000);
}

function increaseIndex() { //go to the next number. If its the end of the array, go back to the front
  if (index < diceRolls.length-1) {
      index ++;
  } else {
    index = 0;
  }
}