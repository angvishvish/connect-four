// var ConnectFour = require ('./lib.js').ConnectFour;
$(document).ready(function(){

	// Init, creates a new game.
	// Ask for players' names.
	// Displays the board.
	// var p1 = window.prompt("First player's name", "P1");
	// var p2 = window.prompt("Second player's name", "P2");

	var p1 = 'P1';
	var p2 = 'P2';
	var game = new ConnectFour (p1,p2);
	$('#message-pane').html( game.currentPlayer() +
				', your turn. Click/tap on column where you want to drop your disc.');
	$('#board').html(game.getColumnsDOM());

	$("#board").on("click", ".column", function(e) {
		var index = $(this).index();
		var winner = game.dropByCurrentPlayer(index)
		if (winner){
			// game over
			// Show message with result
			$('#message-pane').html('Game Over. Winner is ' + winner + ' !');

			// Starts new game.
			game = new ConnectFour (p1,p2);
		} else {
			// Continue, display the message wrt to whose turn it is
			$('#message-pane').html( game.currentPlayer() +
				', your turn. Click/tap on column where you want to drop your disc.');
		}
		// Re-Display the board
		$('#board').html(game.getColumnsDOM());
		$('.'+p1).css({'background-color':'yellow'});
		$('.'+p2).css({'background-color':'red'});
	});
});