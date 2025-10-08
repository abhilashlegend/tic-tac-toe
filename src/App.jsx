import { useState } from "react"
import GameBoard from "./components/gameboard/GameBoard"
import Player from "./components/player/player"
import Log from "./components/log/log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/gameover/gameover";

 const initialBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
];

function derivedActivePlayer(turns) {
   let currentPlayer = 'X';
      if(turns.length > 0 && turns[0].player === 'X') {
        currentPlayer = 'O';
      }
   return currentPlayer;
}


function App() {

  const [gameTurns, setGameTurns] = useState([]);

  const [players, setPlayers] = useState({
    X: 'Player 1',
    O: 'Player 2'
  });

      const gameBoard = [...initialBoard.map(array => [...array])];

    for (let turn of gameTurns) {
        const { row, col } = turn.square;
        gameBoard[row][col] = turn.player;
    }

    let winner = null;

    for(const combination of WINNING_COMBINATIONS) {
      const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
      const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
      const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

      if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
        console.log(`Player ${firstSquareSymbol} has won!`);
        winner = players[firstSquareSymbol];
      }
    }

    const isDraw = gameTurns.length === 9 && !winner;

  //const [activePlayer, setActivePlayer] = useState('X');

  const activePlayer = derivedActivePlayer(gameTurns);

  function handleActivePlayer(rowIndex, colIndex) {
    //setActivePlayer(prev => prev === 'X' ? 'O' : 'X');
    setGameTurns((prevTurns) => {

      const currentPlayer = derivedActivePlayer(prevTurns);
      
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns
      ];

      return updatedTurns;

    });
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      }
    });
    console.log(players);
  }

  
  function handleReset() {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" onSave={handlePlayerNameChange } symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" onSave={handlePlayerNameChange } symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        { (winner || isDraw) && <GameOver winner={winner} onReset={ handleReset } /> }
        <GameBoard board={gameBoard} selectPlayer={handleActivePlayer}/>
        
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
