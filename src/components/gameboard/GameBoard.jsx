import { useState } from "react";



export default function GameBoard({ selectPlayer, board}) {

   

    /* const [gameBoard, setGameBoard] = useState(initialBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard(prevBoard => {
           //const newBoard = prevBoard.map(row => row.slice());
           const newBoard = prevBoard.map(row => [...row]);
            newBoard[rowIndex][colIndex] = currentPlayer;
            return newBoard;
        });
        selectPlayer();
    }
        */

    return (
        <ol id="game-board">
            { board.map((row, rowIndex) => (
                <li key={rowIndex} className="board-row">
                    <ol>
                    { row.map((coll, collIndex) => (
                        <li key={collIndex}><button disabled={coll !== null} onClick={() => selectPlayer(rowIndex, collIndex)} className="board-coll">{coll}</button></li>
                    )) }
                    </ol>
                </li>
            )) }    
        </ol>
    )
}