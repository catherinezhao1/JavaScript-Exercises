// Make your changes to store and update game state in this file
let board = [[null, null, null], [null, null, null], [null, null, null]];
let count = 0;
let nought = "nought";
let cross = "cross";

// Take the row and column number between 0 and 2 
// (inclusive) and update the game state.
function takeTurn(row, column) {
    console.log("takeTurn was called with row: "+row+", column:"+column);
    if (count % 2 == 0 ){
        board[row][column] = nought; 
        count++
    }
    else {
        board[row][column] = cross; 
        count++
    }
    
}

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
    
    console.log("checkWinner was called");
    for (let i =0; i<3 ; i++){
        let count_mark = 0
        for (let j =0; j<3; j++){
            if (board[i][j] == "x" ){count_mark++}
            else if(board[i][j] == "o"){ count_mark--}
        }
        if (count_mark == 3 || count_mark==-3){return "noughts"}
    }
    return null;
}

// Set the game state back to its original state to play another game.
function resetGame() {
    console.log("resetGame was called");
}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
    console.log("getBoard was called");
    return board;
}

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like 
    // environments that support module.exports, like Node.
    module.exports = {
        takeTurn,
        checkWinner,
        resetGame,
        getBoard,
    }
} else {
    console.log("Running in Browser")

}
