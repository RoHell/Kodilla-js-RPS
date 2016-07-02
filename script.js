// === Main variables ====
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

// ==== Pick Player Name ====
function pickName () {	
	player.name = prompt("Type Your Name, Plese", "Guest");
	welcomeText = document.getElementById("welcomeText");

	if (player.name === null) {
		welcomeText.innerHTML = "Hello Anonymous";
		player.name = 'Anonymous';
	}
	else {
		// Player name
		welcomeText.innerHTML = "Hello My Dear " + player.name;
		document.getElementById("playerName").innerHTML = player.name;
	}
};

// ==== New Game =====
function newGame() {
	
	// Pick Player Name
	pickName();

	// Reset
	computer.score = 0;
	computer.pick = "";
	player.score = 0;
	player.pick = "";
	round = 1;

	// Hidden buttons, visible after 'newGame' button click
	var buttons = document.getElementsByClassName("pick-button");
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].style.visibility = "visible";
	}
};

// ==== Player pick ====
function playerPick(pick) {
	player.pick = pick; //save player's pick
	computerPick(); //choose computer's pick
	checkResult(); //check result  
};

// ==== Computer pick ====
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
};

// ==== Check round results ====
function checkRoundResult() {
	var gameResult;
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
	else {	//if player chooses scissors
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
	document.getElementById("gameRound").innerHTML = round;
		
	round++;

	// Current round player name
	document.getElementById("playerNameIs").innerHTML = player.name;
};

// ==== Check game result ====
function checkGameResult () {	
	if ((player.score >= 10) || (computer.score >=10)) {
		var rounResultField = document.getElementById("roundResult").innerHTML;
		//log the result
		if (player.score > computer.score) {
			rounResultField = player.name + " wins the game!";
		}
		else {
			rounResultField = "computer wins the game!";
		}

		//hide buttons
		var buttons = document.getElementsByClassName("pick-button");
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].style.visibility = "hidden";
		}
	}
};

// ==== check final result ====
function checkResult() {
	checkRoundResult();
	checkGameResult();
};