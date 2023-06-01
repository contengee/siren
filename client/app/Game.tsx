import React, { useEffect, useState } from 'react';
import { Game } from '../../server/src/models/Game';
import PlayerComponent from './components/Player';
import EnemyComponent from './components/Enemy';
import ItemComponent from './components/Item';
import BlockComponent from './components/Block';
import FloorComponent from './components/Floor';

interface Props {
    game: Game;
}

const GameComponent: React.FC<Props> = ({ game }) => {
    const [currentGame, setCurrentGame] = useState(game);

    useEffect(() => {
        // Regularly update game state
        const intervalId = setInterval(() => {
            game.updateGame();
            setCurrentGame({ ...game });
        }, 1000); // Update every second

        return () => clearInterval(intervalId); // Clean up on unmount
    }, [game]);

    return (
        <div>
            <PlayerComponent player={currentGame.player} />
            {currentGame.enemies.map((enemy, index) => (
                <EnemyComponent key={index} enemy={enemy} />
            ))}
            {currentGame.items.map((item, index) => (
                <ItemComponent key={index} item={item} />
            ))}
            {currentGame.blocks.map((block, index) => (
                <BlockComponent key={index} block={block} />
            ))}
            {currentGame.floors.map((floor, index) => (
                <FloorComponent key={index} floor={floor} />
            ))}
        </div>
    );
};

export default GameComponent;
