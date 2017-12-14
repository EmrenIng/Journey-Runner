
// method? With all the info for each 'gem'
var journey = {
	shield: {
		name: "shield",
		value: 0,

	},
	health: {
		name: "health",
		value: 0,
	},
	food: {
		name: "food",
		value: 0,
	},
	knife:{
		name: "knife",
		value: 0,
	},
};
//Global Variables

var currentScore = 0;
var targetScore = 0;
var winCount = 0;
var lossCount = 0;

// Functions
//Random number generator for the the numeric values. 
//Min and Max used so it can be done multiple times. 
var getRandom = function(min, max){
	return Math.floor(Math.random() * (max - min + 1))+ min;
}

var startGame = function() {
	currentScore = 0;
	console.log(currentScore);

	targetScore = getRandom(19,120);
// assign random values to all the elements. 
	journey.shield.value = getRandom(1,12);
	journey.health.value = getRandom(1,12);
	journey.food.value = getRandom(1,12);
	journey.knife.value = getRandom(1,12);
	console.log("Target:" + targetScore);
// print the target value into the html 
	$("#target-score").html(targetScore);
	console.log("________________________");
	console.log(" SH:" + journey.shield.value + " HP:" + journey.health.value + " FD:" + journey.food.value + " KN:" + journey.knife.value);
	console.log("________________________");

}

//Adds values together and shows them up as the current score. 
var addValues = function(journey) {
	currentScore = currentScore + journey.value;
	checkWin();
	$("#yScore").html(currentScore);
	console.log("Score:" + currentScore);	
}


// win and loss conditions. 
var checkWin = function() {
	if(currentScore > targetScore) {
		alert("You Lose!");
		lossCount++;
		$("#lossCount").html(lossCount);
		startGame();
	}
	else if(currentScore === targetScore) {
		alert("You Win!");
		winCount++;
		$("#winCount").html(winCount);
		startGame();
	}

}


startGame();


$("#shield").click(function(){
  addValues(journey.shield);
})
$("#health").click(function(){
	addValues(journey.health);
})
$("#food").click(function(){
 	addValues(journey.food);
})
$("#knife").click(function(){
	addValues(journey.knife); 
})

