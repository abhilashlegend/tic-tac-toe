export default function GameOver({winner, onReset, gamers}) {
    const winnerText = winner != null ? String(winner).toUpperCase() : null;
    const result = winnerText ? `${winnerText} has won the game!` : "It's a draw!";
    return (
        <div id="game-over">
            <h2>Game Over</h2>
            <p>{result}</p>
            <button onClick={onReset}>Rematch!</button>
        </div>
    )
}