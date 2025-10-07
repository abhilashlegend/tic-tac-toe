export default function Log({turns}) {
    return (
        <div id="log">
            <h2>Log</h2>
            <ol>
                {turns.map((turn, index) => (
                    <li key={index}>Player {turn.player} selected {turn.square.row}, {turn.square.col}</li>
                ))}
            </ol>
        </div>
    )
}

