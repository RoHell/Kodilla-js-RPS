// ==== Player name ====
var question = prompt('Type Your Name, Plese');
var welcomeText = document.getElementById('welcomeText');
// Title
if (question === null) {	
	welcomeText.innerHTML = 'Hello My Dear Guest';
}
else {
	welcomeText.innerHTML = 'Hello My Dear ' + question;	
}
// Table
document.getElementById("playerName").innerHTML = question;

// === Game ====
var player = {
	name: question,
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

var gameResult;
// Check the results
function checkResult() {
	if (player.pick === computer.pick) {	//Check if there is a tie
		gameResult = "tie!";
	}
	else if (player.pick === "rock") {		//if player chooses rock    
    	if (computer.pick === "scissors") {
    		player.score++;
    		gameResult = player.name + " wins!";
    	} 
    	else if (computer.pick === "paper") {
    		computer.score++;
    		gameResult = "Computer wins!";
    	}
	}
	else if (player.pick === "paper") {		//if player chooses paper
		if  (computer.pick === "rock") {
			player.score++;
			gameResult = player.name + " wins!";
		}
		else if (computer.pick === "scissors") {
			computer.score++;
			gameResult = "Computer wins!";
		}
	}
	else if (player.pick === "scissors") {	//if player chooses scissors
		if  (computer.pick === "paper") {
			player.score++;
			gameResult = player.name + " wins!";
		}
		else if (computer.pick === "rock") {
			computer.score++;
			gameResult = "Computer wins!";
		}
	}

document.getElementById("playerScore").innerHTML = player.score;
document.getElementById("computerScore").innerHTML = computer.score;
document.getElementById("computerPick").innerHTML = computer.pick;
document.getElementById("playerPick").innerHTML = player.pick;
document.getElementById("gameResult").innerHTML = gameResult;
}

// Current round player name
document.getElementById("playerNameIs").innerHTML = player.name;

function playerPick(pick) {
	player.pick = pick; //save player's pick
	computerPick(); //choose computer's pick
	checkResult(); //check result  
}

// Score
if ((player.score >= 10) || (computer.score >=10)) {
	//log the result
	if (player.score > computer.score) {
		document.getElementById("roundResult").innerHTML = "player wins the game!";
	}
	else {
		document.getElementById("roundResult").innerHTML = "computer wins the game!";
	}
}

//hide buttons
var buttons = document.getElementsByClassName("pick-button");
for (var i = 0; i < buttons.length; i++) {
	buttons[i].style.visibility = 'hidden';
}
