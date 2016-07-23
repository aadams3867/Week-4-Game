// Declare the object
var starwars = {
<<<<<<< HEAD
	droidSelected: "",									// Player has not yet chosen a hero droid
	droidsArray: ["c3po", "r2d2", "bb8", "sbd"],		// Total number of droids is 4

	oppSelected: "",									// Player has not yet chosen an opponent to duel
	matchOver: false,									// Current match is not over
	gameOver: false										// Game is not over	
};

setup();
console.log(this.droidSelected + " " + this.droidsArray);


/*$.when( pickHero() ).done(function(){
	pickOpponent();
});*/

//pickOpponent();




=======
	droidSelected: false,					// Player has not yet chosen a droid hero
	numDroids: 4,							// Total number of droids is 4
	oppSelected: false,						// Player has not yet chosen an opponent to duel
	gameOver: false							// Game is not over	
};

>>>>>>> 898ee69e5e481a3f7c0684b4f36fbc3e72efcba3
//
// ** Fresh game **
// 

function setup() {
<<<<<<< HEAD
	// Initialize game variables
	this.droidSelected = "";
	this.droidsArray = ["c3po", "r2d2", "bb8", "sbd"];
	this.oppSelected = "";
	this.matchOver = false;
	this.gameWinner = "";

	// Display the Start Screen
	$("#droidDisplay").prepend("<p>Pick your droid to begin:</p>");
	$("#c3po").append("<span class='name imgLabel_first'>C-3PO</span><img src='assets/images/c-3po-lego.jpg' alt='Pic of C-3PO'/><span class='stats imgLabel_first'>HP: 120</span>");
	$("#r2d2").append("<span class='name imgLabel_second'>R2-D2</span><img src='assets/images/r2-d2.jpg' alt='Pic of R2-D2'/><span class='stats imgLabel_second'>HP: 100</span>");
	$("#bb8").append("<span class='name imgLabel_third'>BB-8</span><img src='assets/images/bb-8.jpg' alt='Pic of BB-8'/><span class='stats imgLabel_third'>HP: 150</span>");
	$("#sbd").append("<span class='name imgLabel_fourth'>Battle Droid</span><img src='assets/images/super-battle-droid.jpg' alt='Pic of Super Battle Droid'/><span class='stats imgLabel_fourth'>HP: 180</span>");
}

function pickHero() {
	// Capture player's droid selection

	

	    $('#c3po').on('click', function() {
	    	this.droidSelected = "c3po";
	    	this.droidsArray = ["r2d2", "bb8", "sbd"];
		});

		$('#r2d2').on('click', function() {
	    	this.droidSelected = "r2d2";
			this.droidsArray = ["c3po", "bb8", "sbd"];	
		});

	    $('#bb8').on('click', function() {
	    	this.droidSelected = "bb8";
			this.droidsArray = ["c3po", "r2d2", "sbd"];
		});

	    $('#sbd').on('click', function() {
	    	this.droidSelected = "sbd";
			this.droidsArray = ["c3po", "r2d2", "bb8"];
		});

}

function opponentSetup() {

	// Change html to reflect player's hero droid selection
	$("#droidDisplay").empty();

	$("#heroDisplay").prepend("<p>Your droid:</p>");

	if (this.droidSelected == "c3po") {
		$("#heroDisplay").append("<span class='name imgLabel_first'>C-3PO</span><img src='assets/images/c-3po-lego.jpg' alt='Pic of C-3PO'/><span class='stats imgLabel_first'>HP: 120</span>");
	} else if (this.droidSelected == "r2d2") {
		$("#heroDisplay").append("<span class='name imgLabel_first'>R2-D2</span><img src='assets/images/r2-d2.jpg' alt='Pic of R2-D2'/><span class='stats imgLabel_first'>HP: 100</span>");
	} else if (this.droidSelected == "bb8") {
		$("#heroDisplay").append("<span class='name imgLabel_first'>BB-8</span><img src='assets/images/bb-8.jpg' alt='Pic of BB-8'/><span class='stats imgLabel_first'>HP: 150</span>");
	} else { // (this.droidSelected == "sbd")
		$("#heroDisplay").append("<span class='name imgLabel_first'>Battle Droid</span><img src='assets/images/super-battle-droid.jpg' alt='Pic of Super Battle Droid'/><span class='stats imgLabel_first'>HP: 180</span>");
	}

	// Adding a selection of Opponents to duel
	// Placeholder code, this part still broken (incorrect pictures displaying)
	$("#duelersDisplay").prepend("<p>Opponents Available to Duel:</p>");

	if (this.droidsArray.length == 3) {
		$("#opp1").append("<span class='name imgLabel_first'>C-3PO</span><img src='assets/images/c-3po-lego.jpg' alt='Pic of C-3PO'/><span class='stats imgLabel_first'>HP: 120</span>");
		$("#opp2").append("<span class='name imgLabel_second'>R2-D2</span><img src='assets/images/r2-d2.jpg' alt='Pic of R2-D2'/><span class='stats imgLabel_second'>HP: 100</span>");
		$("#opp3").append("<span class='name imgLabel_third'>BB-8</span><img src='assets/images/bb-8.jpg' alt='Pic of BB-8'/><span class='stats imgLabel_third'>HP: 150</span>");
	} else if (this.droidsArray.length == 2) {
		$("#opp1").append("<span class='name imgLabel_first'>C-3PO</span><img src='assets/images/c-3po-lego.jpg' alt='Pic of C-3PO'/><span class='stats imgLabel_first'>HP: 120</span>");
		$("#opp2").append("<span class='name imgLabel_second'>R2-D2</span><img src='assets/images/r2-d2.jpg' alt='Pic of R2-D2'/><span class='stats imgLabel_second'>HP: 100</span>");
	} else {
		$("#opp1").append("<span class='name imgLabel_first'>C-3PO</span><img src='assets/images/c-3po-lego.jpg' alt='Pic of C-3PO'/><span class='stats imgLabel_first'>HP: 120</span>");
	}

//$("#sbd").append("<span class='name imgLabel_fourth'>Battle Droid</span><img src='assets/images/super-battle-droid.jpg' alt='Pic of Super Battle Droid'/><span class='stats imgLabel_fourth'>HP: 180</span>");

}

function pickOpponent() {
	//Capture player's opponent selection

	    $('#opp1').on('click', function() {
	    	this.oppSelected = "c3po";
	    	this.droidsArray = ["r2d2", "bb8", "sbd"];
		});

		$('#opp2').on('click', function() {
	    	this.oppSelected = "r2d2";
			this.droidsArray = ["c3po", "bb8", "sbd"];	
		});

	    $('#opp3').on('click', function() {
	    	this.oppSelected = "bb8";
			this.droidsArray = ["c3po", "r2d2", "sbd"];
		});

}


function battleSetup() {
	// Change html to reflect player's opponent selection
	$("#duelersDisplay").empty();

	$("#attackDisplay").append("<button id='attack'>Attack!</button>");

	// Placeholder code, this part still broken (incorrect picture displaying)
	$("#oppDisplay").prepend("<p>Your Opponent:</p>")
		.append("<span class='name imgLabel_second'>R2-D2</span><img src='assets/images/r2-d2.jpg' alt='Pic of R2-D2'/><span class='stats imgLabel_second'>HP: 100</span>");

=======
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
>>>>>>> 898ee69e5e481a3f7c0684b4f36fbc3e72efcba3
}


//
// ** Play the game **
//


<<<<<<< HEAD
function battleMode() {
	
	// Initialize battle variables
	// Placeholder code, this part still broken (game numbers not yet balanced)
	var heroAP = 8,									// Player's Base Attack Power
		heroCAP = heroAP,							// Player's Current Attack Power
		oppAP = 25,									// Opponent's Attack Power
		heroHP = 120,								// Player's Initial Hit Points
		oppHP = 180;								// Opponent's Initial Hit Points

	// To battle!
	// Insert some sort of loop here to keep cycling through battle until someone's HP gets too low
		$('button').on('click', function() {
	    	
			$("#resultsDisplay").append("'<p>You attacked ' + this.oppSelected + ' for ' + heroCAP + ' damage.</p>'")
				.append("'<p>' + this.oppSelected + ' attacked you back for ' + oppAP + ' damage.</p>'");
	    	heroHP = heroHP - oppAP;
	    	oppHP = oppHP - heroCAP;
	    	// Insert code here for updating the HP stat under the images of the droid duelers
	    	//
	    	//
	    	//

	    	heroCAP = heroCAP + heroAP;

	    	// Check to see if the match/game is over
	    	if (heroHP == 0 || heroHP < 0) {			// Player died, so game over - leave function
	    		this.matchOver = true;
	    		this.gameWinner = "opp";
	    		return;
	    	} else if (oppHP == 0 || oppHP < 0) {		// Opponent died, so match over - leave function
	    		this.matchOver = true;
	    		return;
	    	}
		});

	// End of loop
}

function matchCheck() {
	if (this.gameWinner == "opp") {
		gameOver();
	} else if (this.matchOver == true && this.droidsArray.length == 0) {		// Out of matches to play
		this.gameWinner = "player";
		gameOver();
	} else if (this.matchOver == true) {
		$("#resultsDisplay").html("'<p>You have defeated ' + this.oppSelected + '. Choose another opponent.'");
		matchReset();											// Still more matches to play
	}
}

function matchReset() {
	// Resets match variables
	this.matchOver = false;

	opponentSetup();
	pickOpponent();
	battleSetup();

	battleMode();

}



//
// ** Game over!  Determine if the player won or lost, and then provide for restarting the game **
//

function gameOver() {

	if (this.gameWinner == "opp") {
		$("#resultsDisplay").html("<p>You have been defeated... GAME OVER!</p>")
			.append("<button id='restart'>Restart</button>");
	} else if (this.gameWinner == "player") {
		$("#resultsDisplay").html("<p>You won! CONGRATULATIONS!</p>")
			.append("<button id='restart'>Restart</button>");		
	}

}
=======
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
>>>>>>> 898ee69e5e481a3f7c0684b4f36fbc3e72efcba3
