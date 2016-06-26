// ==== Welcome message ====
var question = prompt('Type Your Name, Plese');
var welcomeText = document.getElementById('welcomeText');
welcomeText.innerHTML = 'Hello ' + question;

// === Game ====
var player = {
	name: '',
	score: 0,
	pick: ''
};

var computer = {
	name: 'computer',
	score: 0,
	pick: ''
};

var round = 0;