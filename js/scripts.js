function switchTurn(playerNum) {
  if (playerNum === 1) {
    currentPlayer = player2;// Switch to Player 2's turn
  } else if (playerNum === 2) {
    currentPlayer = player1;// Switch to Player 1's turn
  } else {
    console.log("Error: no player selected");
  };
};

function resultCheck() {
  const board = currentGame.spaces;
  // Horizontal wins:
  if (board[0] === board[1] && board[0] === board[2]) {
    console.log(board[0] + "s win!")
  } else if (board[3] === board[4] && board[3] === board[5]) {
    console.log(board[0] + "s win!")
  } else if (board[6] === board[7] && board[6] === board[8]) {
    console.log(board[0] + "s win!")
  // Vertical wins:
  } else if (board[0] === board[3] && board[0] === board[6]) {
    console.log(board[0] + "s win!")
  } else if (board[1] === board[4] && board[1] === board[7]) {
    console.log(board[0] + "s win!")
  } else if (board[2] === board[5] && board[2] === board[8]) {
    console.log(board[0] + "s win!")
  // Diagonal wins:
  } else if (board[0] === board[4] && board[0] === board[8]) {
    console.log(board[0] + "s win!")
  } else if (board[2] === board[4] && board[2] === board[6]) {
    console.log(board[0] + "s win!")
  } else {
    //console.log("CATSSSS!!!");
  };
}
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
let player1 = new Player(1, "X");
let player2 = new Player(2, "O");
let currentPlayer = player1;
// if (player1Turn === true) {
//   playerMark = "X"
// } else if (player1Turn === false) {
//   playerMark = "O"
// }

Player.prototype.addMark = function(space) {
  const board = currentGame.spaces;
  if (board[space] === "") { // If the player's chosen space is empty...
    board[space] = this.playerMark; // ...place their mark
    console.log("Player " + this.playerMark + " made a mark")
    resultCheck();
    switchTurn(this.playerNum);
  } else { // Otherwise, tell them the space is taken
    console.log("Sorry! This space is taken!")
  }
  // check if mark wins the game
  // check if board is full/cat's game
  // if neither, change mark to next player?
};




// Current console testing commands

// Show the empty board before any commands:
console.log("Starting board state: " + currentGame.spaces)

// Add a player mark:
currentPlayer.addMark(2);
currentPlayer.addMark(7);
currentPlayer.addMark(4);
currentPlayer.addMark(5);
currentPlayer.addMark(6);
currentPlayer.addMark(0);


// Show the current board state:
console.log("Current board state: " + currentGame.spaces)
