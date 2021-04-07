// Tic-Tac-Toe
// Game board object
function Board() {
  this.spaces = [
    "",
    "",// Spaces are always empty at the start of a game
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ];
}

// 
Board.prototype.addMark = function(mark, boardSpace) {
  targetSpace = this.spaces[boardSpace];
  if (targetSpace === "") { // If the player's chosen space is empty...
    targetSpace = mark; // ...place their mark
  } else { // Otherwise, tell them the space is taken
    console.log("Sorry, Player " + mark + "! This space is taken!")
  }
  console.log("Current board state: " + this.spaces) // Print the current board (an ugly array for now)
};

// Instantiate a new board to begin a game
const thisGame = new Board();



// function Player() {

// };


