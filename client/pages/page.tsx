// @react-ssr/express によるサーバーサイドレンダリングを無効にするため、"use client" をマークする
export const __experimental_useClient = true;
import { useState, useEffect } from 'react';

const Home = () => {
  const [player, setPlayer] = useState(null);
  const [enemies, setEnemies] = useState([]);

  useEffect(() => {
    fetchPlayer();
    fetchEnemies();
  }, []);

  const fetchPlayer = async () => {
    const response = await fetch('/api/player');
    const data = await response.json();
    setPlayer(data);
  };

  const fetchEnemies = async () => {
    const response = await fetch('/api/enemy');
    const data = await response.json();
    setEnemies(data);
  };

  return (
    <div>
      <h1>Player</h1>
      {player && (
        <ul>
          <li>Player ID: {player.playerId}</li>
          <li>HP: {player.hp}</li>
          <li>Attack: {player.attack}</li>
          <li>Position: ({player.position.x}, {player.position.y})</li>
        </ul>
      )}

      <h1>Enemies</h1>
      <ul>
        {enemies.map((enemy) => (
          <li key={enemy.enemyId}>
            Enemy ID: {enemy.enemyId}, Type: {enemy.type}, HP: {enemy.hp}, Attack: {enemy.attack}, Position: ({enemy.position.x}, {enemy.position.y})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
