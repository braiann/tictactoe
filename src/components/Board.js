import {React, useEffect, useState} from "react";
import Opponent from "../Opponent";
import Button from "./Button";
import Square from "./Square";

export default function Board({isSinglePlayer, endGame}) {
    const [board, setBoard] = useState([
        0, 0, 0,
        0, 0, 0,
        0, 0, 0,
    ]);
    const [turn, setTurn] = useState(1);
    const [gameWon, setGameWon] = useState(0);
    const [moves, setMoves] = useState(0);

    let opponent;
    if (isSinglePlayer) {
        opponent = new Opponent(markSquare);
    }

    // These six trackers check if the game was won by player 1 or 2
    // after every move
    const [xRows, setXRows] = useState([0, 0, 0]);
    const [xColumns, setXColumns] = useState([0, 0, 0]);
    const [xDiagonals, setXDiagonals] = useState([0, 0]);

    const [yRows, setYRows] = useState([0, 0, 0]);
    const [yColumns, setYColumns] = useState([0, 0, 0]);
    const [yDiagonals, setYDiagonals] = useState([0, 0]);

    function markSquare(index, value) {
        setMoves(prev => prev + 1);
        setBoard(prevBoard => {
            const newBoard = [...prevBoard];
            newBoard[index] = value;
            return newBoard;
        });

        setGameData(turn, index)
        setTurn(prevTurn => prevTurn === 1 ? 2 : 1);
    }

    // Updates the six trackers
    function setGameData(player, index) {
        let setRows, setColumns, setDiagonals;
        if (player === 1) {
            setRows = setXRows;
            setColumns = setXColumns;
            setDiagonals = setXDiagonals;
        } else {
            setRows = setYRows;
            setColumns = setYColumns;
            setDiagonals = setYDiagonals;
        }

        setRows(prev => { // Check if any player has 3 marks in a row
            let newRows = [...prev];
            newRows[index % 3] = prev[index % 3] + 1;
            return newRows;
        });
        setColumns(prev => { // Check if any player has 3 marks in a column
            let newColumns = [...prev];
            if (index < 3) {
                newColumns[0] = prev[0] + 1;
            } else if (index < 6) {
                newColumns[1] = prev[1] + 1;
            } else {
                newColumns[2] = prev[2] + 1;
            }
            return newColumns;
        });
        if (index % 4 === 0) { // Check if any player has 3 marks diagonally
            setDiagonals(prev => {
                let newDiagonals = [...prev];
                newDiagonals[0] = newDiagonals[0] + 1;
                return newDiagonals;
            });
        }
        if (index === 2 || index === 4 || index === 6) {
            setDiagonals(prev => {
                let newDiagonals = [...prev];
                newDiagonals[1] = newDiagonals[1] + 1;
                return newDiagonals;
            })
        }
    }

    const squareElements = board.map((square, index) =>
        <Square
            key={index}
            onClick={() => markSquare(index, turn) }
            mark={square}
            gameWon={gameWon}
        />
    );

    useEffect(() => {
        if (xRows.some(x => x === 3) ||
            xColumns.some(x => x === 3) ||
            xDiagonals.some(x => x === 3)) {
                setGameWon(1);
        } else if (yRows.some(x => x === 3) ||
            yColumns.some(x => x === 3) ||
            yDiagonals.some(x => x === 3)) {
                setGameWon(2);
        } else if (moves >= 9) {
            setGameWon(3)
        }
        if (isSinglePlayer && gameWon === 0 && turn === 2 && moves < 8) {
            console.log("turn: " + turn)
            opponent.play(board);
        }
    }, [board]);

    return (
        <div className="board">
            {squareElements}
            {gameWon !== 0 &&
            <div className="game-won">
                <h2>{gameWon === 3 ? '¡Empate!' : `¡Ganó el jugador ${gameWon === 1 ? '1' : '2'}!`}</h2>
                <Button text={"Volver"} onClick={endGame} />
            </div>
            }
        </div>
    )
}