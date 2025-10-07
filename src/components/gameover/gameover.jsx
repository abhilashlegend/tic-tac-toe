export default function GameOver({winner}) {

    const result = winner ? `Player ${winner} has won the game!` : "It's a draw!";
    return (
        <div id="game-over">
            <h2>Game Over</h2>
            <p>{result}</p>
            <button>Rematch!</button>
        </div>
    )
}