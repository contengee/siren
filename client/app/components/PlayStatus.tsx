// components/PlayerStatus.tsx
import React from 'react';
import { Player } from '../classes/Player';

interface PlayerStatusProps {
  player: Player;
}

export const PlayerStatus: React.FC<PlayerStatusProps> = ({ player }) => {
  return (
    <div className="player-status">
      <p>HP: {player.hp}</p>
      <p>Attack: {player.attack}</p>
      <p>Defense: {player.defense}</p>
      <p>Items: {player.itemsString}</p>
      <p>Stage: {player.stage}</p>
    </div>
  );
};
