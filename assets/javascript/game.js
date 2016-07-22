// Declare the object
var starwars = {
	droidSelected: false,					// Player has not yet chosen a droid hero
	numDroids: 4,							// Total number of droids is 4
	oppSelected: false,						// Player has not yet chosen an opponent to duel
	gameOver: false							// Game is not over	
};

//
// ** Fresh game **
// 

function setup() {
	//  Initialize game variables
	this.droidSelected = false;
	this.numDroids = 4;
	this.oppSelected = false;
	this.gameOver = false;
	
	// Display the Start Screen
	$("#droidDisplay").html("<p>Pick your droid to begin:</p>")
		.append("<span class='name' id='imgLabel_c3po'>C-3PO</span><img src='assets/images/c-3po-lego.jpg' alt='Pic of C-3PO'/><span class='stats' id='imgLabel_c3po'>HP: 120</span>")
		.append("<span class='name' id='imgLabel_r2d2'>R2-D2</span><img src='assets/images/r2-d2.jpg' alt='Pic of R2-D2'/><span class='stats' id='imgLabel_r2d2'>HP: 100</span>")
		.append("<span class='name' id='imgLabel_bb8'>BB-8</span><img src='assets/images/bb-8.jpg' alt='Pic of BB-8'/><span class='stats' id='imgLabel_bb8'>HP: 150</span>")
		.append("<span class='name' id='imgLabel_sbd'>Battle Droid</span><img src='assets/images/super-battle-droid.jpg' alt='Pic of Super Battle Droid'/><span class='stats' id='imgLabel_sbd'>HP: 180</span>");

	// Capture player's droid selection
    $('<div/>').on('click', function() {
    	droidSelected = true;
    	numDroids = 3;
    	console.log("Clicked: " + droidSelected + " " + numDroids);
	});

}

setup();
console.log(droidSelected + " " + numDroids);
/*
// Displaying the current game stats
function writeStats() {
	
	var stats = "<br>" +
	"-----------------------------------------------------------------------------" + "<br>" +
	hangman.winLose + "<br>" + 
	"Pokémon caught: " + hangman.numWins + "<br>" + 
	"Number of tries left: " + hangman.numTriesLeft + "<br>" + 
	"Letters guessed: " + hangman.lettersGuessed + "<br>" + 
	"-----------------------------------------------------------------------------";
	document.getElementById("statsDisplay").innerHTML = stats;
}


function initialSetup() {
	setup();
	updatePic();
	writeStats();
}


//
// ** Play the game **
//


// Capture user input
document.onkeyup = function(event) {

	// Validates and changes the user's letter input to uppercase
	var userInput = String.fromCharCode(event.keyCode);

	var validLetters = /^[A-Za-z]+$/;
	if (userInput.match(validLetters) == null) {
		alert("Have you ever played Hangman before?  Please type a letter.");
		return;
	}

	userInput = userInput.toUpperCase();

	// Checks to see if the user entered the same letter already
	for (var i=0; i<hangman.lettersGuessed.length; i++) {
		if (userInput === hangman.lettersGuessed[i]) {
			alert("Oops, you already guessed that letter!  Please try again.");
			return;
		}
	}

	// Declare / reset goodGuess variable
	var goodGuess = 0;
		
	// Checks to see if the user's letter guess is in the random word
	for (var i=0; i<hangman.wordArray.length; i++) {
		if (userInput === hangman.wordArray[i]) {			
			hangman.wordGuessed[i] = userInput;
			goodGuess = true;
			hangman.correctGuessCount++;
			document.getElementById("wordDisplay").innerHTML = hangman.wordGuessed;
			// Did they just win the game?
			if (hangman.correctGuessCount == hangman.wordArray.length) {
				hangman.wordComplete = true;
			}
		}
	}

	// Bad guess only...
	if (goodGuess == false) {
		hangman.numTriesLeft--;
	}

	// Good or bad guess
	hangman.lettersGuessed.push(userInput);
	writeStats();
	console.log(userInput + " numTriesLeft: " + hangman.numTriesLeft + " wordComplete: " + hangman.wordComplete);
	console.log(hangman.wordGuessed + " correctGuessCount: " + hangman.correctGuessCount);

	// Checks to see if the game is over yet
	if ((hangman.numTriesLeft == 0) || (hangman.wordComplete == true)) {
		gameOver();
	}
}

//
// ** Game over!  Determine if the user won or lost, and then provide for restarting the game **
//

function gameOver() {
	if (hangman.audio != "") {					// If a sound file still might be playing, pause it
		hangman.audio.pause();
	}

	if (hangman.numTriesLeft == 0) {            // User lost!
		hangman.winLose = "You did NOT catch your last Pokémon!  " + hangman.word + " ran away.";
		hangman.audio = new Audio('assets/sounds/defeat.mp3');
	} else if (hangman.wordComplete == true){   // User won!
		hangman.winLose = "Hooray!  You caught your last Pokémon, " + hangman.word + "!!";
		hangman.numWins++;
		hangman.audio = new Audio('assets/sounds/victory.mp3');
	}
	hangman.audio.play();
	initialSetup();
}
*/