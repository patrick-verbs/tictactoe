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

function Player(playerNum, playerMark) {
  this.playerNum = playerNum;
  this.playerMark = playerMark;
};
// Instantiate a new board to begin a game
const currentGame = new Board();
// if (player1Turn === true) {
//   playerMark = "X"
// } else if (player1Turn === false) {
//   playerMark = "O"
// }
let player1 = new Player(1, "X");
let player2 = new Player(2, "O");

Player.prototype.addMark = function(boardSpace) {
  if (currentGame.spaces[boardSpace] === "") { // If the player's chosen space is empty...
    currentGame.spaces[boardSpace] = this.playerMark; // ...place their mark
    console.log("Player " + this.playerMark + " made a mark")
  } else { // Otherwise, tell them the space is taken
    console.log("Sorry! This space is taken!")
  }
  switchTurn(this.playerNum);
  // check if mark wins the game
  // check if board is full/cat's game
  // if neither, change mark to next player?
};

function switchTurn(playerNum) {
  if (playerNum === 1) {
    playerMark = "O";
  } else if (playerNum === 2) {
    playerMark = "X";
  } else {
    console.log("Error: no player selected");
  };
};

// Current console testing commands

// Show the empty board before any commands:
console.log("Starting board state: " + currentGame.spaces)

// Add a player mark:
player1.addMark(4);
player2.addMark(7);

// Show the current board state:
console.log("Current board state: " + currentGame.spaces)
