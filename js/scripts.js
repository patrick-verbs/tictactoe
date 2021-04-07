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
  // const targetSpace = this.spaces[boardSpace];
  if (this.spaces[boardSpace] === "") { // If the player's chosen space is empty...
    this.spaces[boardSpace] = mark; // ...place their mark
  } else { // Otherwise, tell them the space is taken
    console.log("Sorry, Player " + mark + "! This space is taken!")
  }
  console.log("Current board state: " + this.spaces) // Print the current board (an ugly array for now)
};




// function Player() {

// };


// Current console testing commands
// Instantiate a new board to begin a game
const thisGame = new Board();
let playerMark = "X";
let targetSpace = 4;
console.log("Starting board state: " + thisGame.spaces)
thisGame.addMark(playerMark, targetSpace);