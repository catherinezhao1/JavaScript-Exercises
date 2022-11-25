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
    // check diagonal
    if (board[0][0] == nought && board[1][1] == nought && board[2][2] == nought){
        return "noughts"
    }
    else if (board[0][0] == cross && board[1][1] == cross && board[2][2] == cross){
        return "crosses"
    }
    else if (board[2][0] == nought && board[1][1] == nought && board[0][2]== nought){
        return "noughts"
    }
    else if (board[2][0] == cross && board[1][1] == cross && board[0][2]== cross){
        return "crosses"
    }
    // check for rows and columns
    for (let i=0; i<board.length; i++){
        let nought_count_row =0
        let cross_count_row=0
        let nought_count_col = 0
        let cross_count_col = 0
        for (let j=0; j<board[i].length; j++){
            if (board[i][j] == nought){
                nought_count_row++
            }
            if (board[i][j] == cross){
                cross_count_row++
            }
            if (board[j][i] == nought){
                nought_count_col++
            }
            if (board[j][i] == cross){
                cross_count_col++
            }
        }
        if (nought_count_row == 3 || nought_count_col == 3){
            return "noughts"
        }
        else if (cross_count_row == 3 || cross_count_col ==3){
            return "crosses"
        }
    }



    if (count == 9 ){return "nobody"}
}
    



// Set the game state back to its original state to play another game.
function resetGame() {
    console.log("resetGame was called");
    count = 0
    board = [[null, null, null], [null, null, null], [null, null, null]];
    return board;
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
