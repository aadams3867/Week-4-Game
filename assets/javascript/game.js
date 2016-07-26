$(document).ready(function() {

// Declare the object
var starwars = {
	droidSelected: "",
	droidsArray: [],

	oppSelected: "",
	matchOver: false,
	gameWinner: "",
	setup: function() {
		// Initialize game variables
		this.droidSelected = "";								// Player has not yet chosen a hero droid
		this.droidsArray = ["c3po", "r2d2", "bb8", "sbd"];		// Initial playable droids
		this.oppSelected = "";									// Player has not yet chosen an opponent to duel
		this.matchOver = false;									// Current match is not over
		this.gameWinner = "";									// Game is not over

		$('#heroDisplay, #duelersDisplay, #attackDisplay, #oppDisplay, #resultsDisplay, #quoteDisplay').empty();
	}
};

starwars.setup();
console.log(starwars.droidSelected + " and " + starwars.droidsArray);
startScreen();





//
// ** Fresh game **
// 

function startScreen() {
	// Display the Start Screen in #droidDisplay div
	$("#droidDisplay").prepend("<p>Pick your droid to begin:</p>");
	$("#droid1").append("<span class='name imgLabel_first'>C-3PO</span><img src='assets/images/c-3po-lego.jpg' alt='Pic of C-3PO'/><span class='stats imgLabel_first'>HP: 120</span>");
	$("#droid2").append("<span class='name imgLabel_second'>R2-D2</span><img src='assets/images/r2-d2.jpg' alt='Pic of R2-D2'/><span class='stats imgLabel_second'>HP: 100</span>");
	$("#droid3").append("<span class='name imgLabel_third'>BB-8</span><img src='assets/images/bb-8.jpg' alt='Pic of BB-8'/><span class='stats imgLabel_third'>HP: 150</span>");
	$("#droid4").append("<span class='name imgLabel_fourth'>Battle Droid</span><img src='assets/images/super-battle-droid.jpg' alt='Pic of Super Battle Droid'/><span class='stats imgLabel_fourth'>HP: 180</span>");
}

// Capture player's droid selection

$('#droid1').on('click', function() {
	starwars.droidSelected = "c3po";
	starwars.droidsArray = ["r2d2", "bb8", "sbd"];
	opponentSetup();
});

$('#droid2').on('click', function() {
	starwars.droidSelected = "r2d2";
	starwars.droidsArray = ["c3po", "bb8", "sbd"];
	opponentSetup();
});

$('#droid3').on('click', function() {
	starwars.droidSelected = "bb8";
	starwars.droidsArray = ["c3po", "r2d2", "sbd"];
	opponentSetup();
});

$('#droid4').on('click', function() {
	starwars.droidSelected = "sbd";
	starwars.droidsArray = ["c3po", "r2d2", "bb8"];
	opponentSetup();
});


function opponentSetup() {

	// Change html to reflect player's hero droid selection
	$("#droidDisplay").empty();

	$("#heroDisplay").prepend("<p>Your droid:</p>");

	if (starwars.droidSelected == "c3po") {
		$("#heroDisplay").append("<span class='name imgLabel_first'>C-3PO</span><img src='assets/images/c-3po-lego.jpg' alt='Pic of C-3PO'/><span class='stats imgLabel_first'>HP: 120</span>");
	} else if (starwars.droidSelected == "r2d2") {
		$("#heroDisplay").append("<span class='name imgLabel_first'>R2-D2</span><img src='assets/images/r2-d2.jpg' alt='Pic of R2-D2'/><span class='stats imgLabel_first'>HP: 100</span>");
	} else if (starwars.droidSelected == "bb8") {
		$("#heroDisplay").append("<span class='name imgLabel_first'>BB-8</span><img src='assets/images/bb-8.jpg' alt='Pic of BB-8'/><span class='stats imgLabel_first'>HP: 150</span>");
	} else { // (starwars.droidSelected == "sbd")
		$("#heroDisplay").append("<span class='name imgLabel_first'>Battle Droid</span><img src='assets/images/super-battle-droid.jpg' alt='Pic of Super Battle Droid'/><span class='stats imgLabel_first'>HP: 180</span>");
	}

	// Adding a selection of Opponents to duel
	$("#duelersDisplay").prepend("<p>Opponents Available to Duel:</p>");

	console.log(starwars.droidSelected + " and " + starwars.droidsArray + " and " + starwars.droidsArray.length);

	// Opponent Choice #1						1, 2, or 3 possible opponents
	if (starwars.droidsArray[0] == "c3po") {
		$("#duelersDisplay #dueler1").append("<span class='name imgLabel_first'>C-3PO</span><img id='dueler1' value='c3po' src='assets/images/c-3po-lego.jpg' alt='Pic of C-3PO'/><span class='stats imgLabel_first'>HP: 120</span>");
	} else if (starwars.droidsArray[0] == "r2d2") {
		$("#duelersDisplay").append("<span class='name imgLabel_first'>R2-D2</span><img id='dueler1' value='r2d2' src='assets/images/r2-d2.jpg' alt='Pic of R2-D2'/><span class='stats imgLabel_first'>HP: 100</span>");
	} else if (starwars.droidsArray[0] == "bb8") {
		$("#duelersDisplay").append("<span class='name imgLabel_first'>BB-8</span><img id='dueler1' value='bb8' src='assets/images/bb-8.jpg' alt='Pic of BB-8'/><span class='stats imgLabel_first'>HP: 150</span>");
	} else {	// starwars.droidsArray[0] == "sbd"
		$("#duelersDisplay").append("<span class='name imgLabel_first'>Battle Droid</span><img id='dueler1' value='sbd' src='assets/images/super-battle-droid.jpg' alt='Pic of Super Battle Droid'/><span class='stats imgLabel_first'>HP: 180</span>");
	}

	if (starwars.droidsArray.length > 1) {		// 2 or 3 possible opponents
	// Opponent Choice #2
		if (starwars.droidsArray[1] == "c3po") {
			$("#duelersDisplay").append("<span class='name imgLabel_second'>C-3PO</span><img id='dueler2' value='c3po' src='assets/images/c-3po-lego.jpg' alt='Pic of C-3PO'/><span class='stats imgLabel_second'>HP: 120</span>");
		} else if (starwars.droidsArray[1] == "r2d2") {
			$("#duelersDisplay").append("<span class='name imgLabel_second'>R2-D2</span><img id='dueler2' value='r2d2' src='assets/images/r2-d2.jpg' alt='Pic of R2-D2'/><span class='stats imgLabel_second'>HP: 100</span>");
		} else if (starwars.droidsArray[1] == "bb8") {
			$("#duelersDisplay").append("<span class='name imgLabel_second'>BB-8</span><img id='dueler2' value='bb8' src='assets/images/bb-8.jpg' alt='Pic of BB-8'/><span class='stats imgLabel_second'>HP: 150</span>");
		} else {	// starwars.droidsArray[1] == "sbd"
			$("#duelersDisplay").append("<span class='name imgLabel_second'>Battle Droid</span><img id='dueler2' value='sbd' src='assets/images/super-battle-droid.jpg' alt='Pic of Super Battle Droid'/><span class='stats imgLabel_second'>HP: 180</span>");
		}
	}

	if (starwars.droidsArray.length > 2) {		// 3 possible opponents
	// Opponent Choice #3
		if (starwars.droidsArray[2] == "c3po") {
			$("#duelersDisplay").append("<span class='name imgLabel_third'>C-3PO</span><img id='dueler3' value='c3po' src='assets/images/c-3po-lego.jpg' alt='Pic of C-3PO'/><span class='stats imgLabel_third'>HP: 120</span>");
		} else if (starwars.droidsArray[2] == "r2d2") {
			$("#duelersDisplay").append("<span class='name imgLabel_third'>R2-D2</span><img id='dueler3' value='r2d2' src='assets/images/r2-d2.jpg' alt='Pic of R2-D2'/><span class='stats imgLabel_third'>HP: 100</span>");
		} else if (starwars.droidsArray[2] == "bb8") {
			$("#duelersDisplay").append("<span class='name imgLabel_third'>BB-8</span><img id='dueler3' value='bb8' src='assets/images/bb-8.jpg' alt='Pic of BB-8'/><span class='stats imgLabel_third'>HP: 150</span>");
		} else {	// starwars.droidsArray[2] == "sbd"
			$("#duelersDisplay").append("<span class='name imgLabel_third'>Battle Droid</span><img id='dueler3' value='sbd' src='assets/images/super-battle-droid.jpg' alt='Pic of Super Battle Droid'/><span class='stats imgLabel_third'>HP: 180</span>");
		}
	}
}

//Capture player's opponent selection

$('#duelersDisplay').on('click', function() {
	console.log("Dueler 1 selected!");


/*	starwars.oppSelected = $(this).value();
	$.grep(starwars.droidsArray, function(n,i) {
		return n != starwars.oppSelected;
	});
	console.log("Dueler 1 selected!");
	console.log("starwars.oppSelected: " + starwars.oppSelected + " starwars.droidsArray: " + starwars.droidsArray);
});

$('#dueler2').on('click', function() {
	starwars.oppSelected = $(this).value();
	starwars.droidsArray = ["c3po", "bb8", "sbd"];	
});

$('#dueler3').on('click', function() {
	starwars.oppSelected = $(this).value();
	starwars.droidsArray = ["c3po", "r2d2", "sbd"];*/
});




/*function battleSetup() {
	// Change html to reflect player's opponent selection
	$("#duelersDisplay").empty();

	$("#attackDisplay").append("<button id='attack'>Attack!</button>");

	// Placeholder code, this part still broken (incorrect picture displaying)
	$("#oppDisplay").prepend("<p>Your Opponent:</p>")
		.append("<span class='name imgLabel_second'>R2-D2</span><img src='assets/images/r2-d2.jpg' alt='Pic of R2-D2'/><span class='stats imgLabel_second'>HP: 100</span>");

}


//
// ** Play the game **
//


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

}*/




})