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
  this.active = true;
};

function Player(playerNum, playerMark) {
  this.playerNum = playerNum;
  this.playerMark = playerMark;
};

    const currentGame = new Board();
    const player1 = new Player(1, "X");
    const player2 = new Player(2, "O");
    let currentPlayer = player1;

Player.prototype.addMark = function(space) {
  if (currentGame.active === true) {
    const board = currentGame.spaces;
    const player = this.playerNum;
    if (board[space] === " ") { 
      board[space] = this.playerMark; // ...place their mark
      console.log("Player " + player + " made a mark");
      console.log(renderBoardConsole(currentGame.spaces));
      let result = resultCheck(player);
      if (result === "win") {
        console.log("Player " + player + " wins!");
        return `Player ${player} wins!`;
      } else if (result === "draw") {
        console.log("Cat's game!")
        return "CATS!!!";
      };
      switchTurn(player);
    } else { // If the space is taken, don't place the player's mark, check results, or advance to the next player's turn
      console.log("Sorry! This space is taken!");
    };
  }
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

function refreshBoard() {
  for (let i = 0; i < currentGame.spaces.length; i++) {
    $("#b" + i).html(currentGame.spaces[i]);
  }
}

function clearBoard() {
  const oldSpaces = currentGame.spaces;
  let newSpaces = oldSpaces;
  for (let i = 0; i < oldSpaces.length; i++) {
    newSpaces[i] = " ";
  };
  currentGame.spaces = newSpaces;
};

function resultCheck(player) {
  console.log("Checking results...")
  const boardState = currentGame.spaces;
  const winningSpaces = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]; // Check for a win:
  for (let i = 0; i < winningSpaces.length; i++) {
    let streak = winningSpaces[i];
    if (
      boardState[streak[0]] !== " "
      && boardState[streak[0]] === boardState[streak[1]]
      && boardState[streak[0]] === boardState[streak[2]]
      ) {
      console.log(`Winning spaces: ${streak[0]}, ${streak[1]}, ${streak[2]}`);
      currentGame.active = false;
      return "win";
    };
  };
  let catsGame = true; // Assume it's a draw -- until we find a blank space
  for (let j = 0; j < boardState.length; j++) {
    if (boardState[j] === " ") { // If a blank space *is* found...
      catsGame = false; // ...then it's not yet a draw...
      break; // ...and we can end the loop early.
    }
  }
  if (catsGame === true) {
    currentGame.active = false;
    return "draw"; 
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
  $("#gameBoard").on("click", ".box", function() {
    let originalId = this.id; // id === e.g. "b0"
    let newId = parseInt(originalId.replace('b', ''));
    let resultDiv = $("#result");
    let resultMessage = $(".result");
    let currentMark = currentPlayer.addMark(newId);
    
    if (currentMark === "CATS!!!" || currentMark === `Player ${currentPlayer.playerNum} wins!`) {
      resultMessage.slideDown(1000);
      resultDiv.html(currentMark);
    }
    refreshBoard();
  });
  $("#reset").click(function(event) {
    event.preventDefault();
    $(".result").slideUp();
    clearBoard();
    refreshBoard();
    currentGame.active = true;
  });
});

