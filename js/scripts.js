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
  if (board[space] === " ") { // If the player's chosen space is empty...
    board[space] = this.playerMark; // ...place their mark
    console.log("Player " + player + " made a mark");
    if (resultCheck(player)) {
      console.log("Player " + player + " wins!");
      return;
    };
    switchTurn(player);
  } else { // Otherwise, tell them the space is taken
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
  const board = currentGame.spaces;
  const winningSpaces = [
    // Horizontal wins:
    [0, 1, 2],// To look at a *single* value, you'd use:
    [3, 4, 5],// winningSpaces[1][0] to get 3...
    [6, 7, 8],// winningSpaces[2][1] to get 7... etc.
    // Vertical wins:
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 6],
    // Diagonal wins:
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningSpaces.length; i++) {
    let streak = winningSpaces[i];
    // Below, "streak[0]" would process as "winningSpaces[i][0]",
    // so it's looking at the *first* number in an array of three numbers,
    // then comparing it to the next two to see if they all match -- for a win.
    if (board[streak[0]] === board[streak[1]] && board[streak[0]] === board[streak[2]] && board[streak[0]] !== " ") {
      return true;
    };
  };
    //console.log("CATSSSS!!!");
};




// Current console testing commands

// Show the empty board before any commands:
console.log("Starting board state: " + currentGame.spaces)

// Add a player mark:
currentPlayer.addMark(0);
currentPlayer.addMark(7);
currentPlayer.addMark(1);
currentPlayer.addMark(5);
currentPlayer.addMark(2);
// currentPlayer.addMark(0);


// Show the current board state:
textBoard = renderBoardConsole(currentGame.spaces);
// console.log("Current board state: " + currentGame.spaces)

function renderBoardConsole(spaces) {
  boardString = `\r\n
  \r\n    :  A  :  B  :  C  :
  --+-----+-----+-----+--
 1  |  ${spaces[0]}  |  ${spaces[1]}  |  ${spaces[2]}  |
  --+-----+-----+-----+--
 2  |  ${spaces[3]}  |  ${spaces[4]}  |  ${spaces[5]}  |
  --+-----+-----+-----+--
 3  |  ${spaces[6]}  |  ${spaces[7]}  |  ${spaces[8]}  |
  \r\n
  \r\n`;
  
  console.log(boardString);
}