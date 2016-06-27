// ==== Player name ====
var question = prompt('Type Your Name, Plese');
var welcomeText = document.getElementById('welcomeText');
// Title
if (question == null) {	
	welcomeText.innerHTML = 'Hello My Dear Guest';
}
else {
	welcomeText.innerHTML = 'Hello My Dear ' + question;	
}
// Table
document.getElementById("playerName").innerHTML = question;
question = player.name

// === Game ====
var player = {
	name: "",
	score: 0,
	pick: ""
};

var computer = {
	name: "computer",
	score: 0,
	pick: ""
};

var round = 0;

// Reset
computer.score = 0;
computer.pick = "";
player.score = 0;
player.pick = "";
round = 0;

//Player pick
function playerPick(pick) {
	player.pick = pick; 
}

// Hidden buttons, visible after 'newGame' button click
function newGame() {
	var buttons = document.getElementsByClassName("pick-button");
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].style.visibility = "visible";
	}
}

// Computer pick, random number between 0 and 3
function computerPick() {
	switch (Math.floor(Math.random()*3)) {
		case 0:
			computer.pick = "rock";
		break;
		case 1:
			computer.pick = "paper";
		break;
		case 2:
			computer.pick = "scissors";
		break;
	}
}

// Check the results
function checkResult() {
	var gameResult;
	if (player.pick === computer.pick) {	//Check if there is a tie
	gameResult = "tie!";
	}
	else if (player.pick === "rock") {		//if player chooses rock    
    	if (computer.pick === "scissors") {
    		player.score++; gameResult = "Player wins!";
    	} 
    	else if (computer.pick === "paper") {
    		computer.score++; gameResult = "Computer wins!";
    	}
	}
	else if (player.pick === "paper") {		//if player chooses paper
		if  (computer.pick === "rock") {
			player.score++; gameResult = "Player wins!";
		}
		else if (computer.pick === "scissors") {
			computer.score++; gameResult = "Computer wins!";
		}
	}
	else if (player.pick === "scissors") {	//if player chooses scissors
		if  (computer.pick === "paper") {
			player.score++; gameResult = "Player wins!";
		}
		else if (computer.pick === "rock") {
			computer.score++; gameResult = "Computer wins!";
		}
	}
}

