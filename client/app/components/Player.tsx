// src/components/Player.tsx
import React from 'react';
import { Player } from '../classes/Player';

interface Props {
    player: Player;
}

const PlayerComponent: React.FC<Props> = ({ player }) => {
    return player.draw();
};

export default PlayerComponent;
