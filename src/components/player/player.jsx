import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onSave }) {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function editPlayer() {
    setIsEditing(prev => {
      const wasEditing = prev;
      // if we are closing the editor (wasEditing === true), call onSave
      if (wasEditing && typeof onSave === 'function') {
        onSave(symbol, playerName);
      }
      return !prev;
    });
    }

    function savePlayer(event) {
        setPlayerName(event.target.value);
    }

  return (
    <li className={isActive ? 'player active' : 'player'}>
      <span className="player active">
        { isEditing ? (<input type="text" value={playerName} onChange={savePlayer} />) : (<span className="player-name">{playerName}</span>) }
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editPlayer}>{ isEditing ? 'Save' : 'Edit' }</button>
    </li>
  );
}