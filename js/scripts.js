// Tic-Tac-Toe
// Start with a game board object
function Board() {
  this.spaces = [];//  "Space 1"     "Space 2"
  this.currentId = 0;// 1             2
}
function Player() {

}


// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = {};// "Fred"  "Jill"
  this.currentId = 0;// 1       2
}

let newBoard = {
  space: "",// 1-9 (or 0-8 for array indexes)
  spaceValue: "" // empty or "X" or "O"
}