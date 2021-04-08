// Tic-Tac-Toe
// Game board object
function Board() {
  this.spaces = [
    " ",
    " ",// Spaces are always empty at the start of a game
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " "
  ];
};

function Player(playerNum, playerMark) {
  this.playerNum = playerNum;
  this.playerMark = playerMark;
};

// Instantiate a new board to begin a game
const currentGame = new Board();

// Instantiate players 1 & 2
const player1 = new Player(1, "X");
const player2 = new Player(2, "O");

// Designate the first active player
let currentPlayer = player1;

Player.prototype.addMark = function(space) {
  const board = currentGame.spaces;
  const player = this.playerNum;
  if (board[space] === " ") { // If the player's chosen space is blank...
    board[space] = this.playerMark; // ...place their mark
    console.log("Player " + player + " made a mark");
    console.log(renderBoardConsole(currentGame.spaces));
    let result = resultCheck(player);
    if (result === "win") {
      console.log("Player " + player + " wins!");
      return;
    } else if (result === "draw") {
      console.log("Cat's game!")
      return
    };
    switchTurn(player);
  } else { // If the space is taken, don't place the player's mark, check results, or advance to the next player's turn
    console.log("Sorry! This space is taken!");
  };
};

function switchTurn(playerNum) {
  if (playerNum === 1) {
    currentPlayer = player2;// Switch to Player 2's turn
  } else if (playerNum === 2) {
    currentPlayer = player1;// Switch to Player 1's turn
  } else {
    console.log("Error: no player selected");
  };
};

function resultCheck(player) {
  console.log("Checking results...")
  const boardState = currentGame.spaces;
  const winningSpaces = [
    // Horizontal win streaks:
    [0, 1, 2],// To look at a *single* value, you'd use:
    [3, 4, 5],// winningSpaces[1][0] to get 3...
    [6, 7, 8],// winningSpaces[2][1] to get 7... etc.
    // Vertical win streaks:
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal win streaks:
    [0, 4, 8],
    [2, 4, 6]
  ];
  // Check for a win:
  for (let i = 0; i < winningSpaces.length; i++) {
    let streak = winningSpaces[i];
    // Below, "streak[0]" would process as "winningSpaces[i][0]",
    // so it's looking at the *first* number in an array of three numbers,
    // then comparing it to the next two to see if they all match -- for a win.
    if (
      boardState[streak[0]] !== " "
      && boardState[streak[0]] === boardState[streak[1]]
      && boardState[streak[0]] === boardState[streak[2]]
      ) {
      console.log(`Winning spaces: ${streak[0]}, ${streak[1]}, ${streak[2]}`);
      return "win";
    };
  };
  // Check for a draw:
  let catsGame = true; // Assume it's a draw -- until we find a blank space
  for (let j = 0; j < boardState.length; j++) {
    if (boardState[j] === " ") { // If a blank space *is* found...
      catsGame = false; // ...then it's not yet a draw...
      break; // ...and we can end the loop early.
    }
  }
  if (catsGame === true) { // If catsGame wasn't set to false in the loop,
    return "draw"; // then we know it's a draw.
  }
};




// User Interface Logic
///////////////////////
function renderBoardConsole(spaces) {
  boardString = `\r\n\r\n
       A     B     C   
    +-----+-----+-----+
 1  |  ${spaces[0]}  |  ${spaces[1]}  |  ${spaces[2]}  |  •
    +-----+-----+-----+
 2  |  ${spaces[3]}  |  ${spaces[4]}  |  ${spaces[5]}  |  •
    +-----+-----+-----+
 3  |  ${spaces[6]}  |  ${spaces[7]}  |  ${spaces[8]}  |  •
    +-----+-----+-----+
       •     •     •
\r\n\r\n`;
  return boardString;
};


$(document).ready(function() {

  // stuff

});


// Console testing commands

// Show the empty board before any commands:
console.log("Starting board state: " + currentGame.spaces);

// An X's win game:
currentPlayer.addMark(4);
currentPlayer.addMark(0);
currentPlayer.addMark(2);
currentPlayer.addMark(3);
currentPlayer.addMark(6);
currentPlayer.addMark(0);

// A cat's game:
// currentPlayer.addMark(0);
// currentPlayer.addMark(4);
// currentPlayer.addMark(6);
// currentPlayer.addMark(3);
// currentPlayer.addMark(5);
// currentPlayer.addMark(1);
// currentPlayer.addMark(7);
// currentPlayer.addMark(8);
// currentPlayer.addMark(2);