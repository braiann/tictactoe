export default class Opponent {
    constructor(markSquare) {
        this.markSquare = markSquare;
    }

    play(board) {
        if (board.some(x => x === 1)) {
            let index = Math.floor(Math.random() * 9);
            while (board[index] !== 0) {
                if (board[index] === 0) {
                    break;
                }
                index = Math.floor(Math.random() * 9);
            }
            console.log("---------")
            console.log(board[0], board[1], board[2])
            console.log(board[3], board[4], board[5])
            console.log(board[6], board[7], board[8])
            this.markSquare(index, 2);
        }
    }
}