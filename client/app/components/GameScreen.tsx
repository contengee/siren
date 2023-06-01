// components/GameScreen.tsx
import { useEffect, useState } from 'react';
import { Game } from '../../../server/src/models/Game';
import { GameController } from '../../../server/src/models/GameController';
import { GameState } from '../../../server/src/models/GameState';
import { PlayerStatus } from './PlayerStatus';
import { GameLog } from '../../../server/src/models/GameLog';
import { GameMap } from './GameMap';

export const GameScreen = () => {
  const [gameState, setGameState] = useState(new GameState('game1'));
  const game = new Game('game1');
  const gameController = new GameController(game);

  useEffect(() => {
    const handleGameStateUpdate = () => {
      setGameState(game.gameState);
    };

    game.gameState.addObserver(handleGameStateUpdate);

    return () => {
      game.gameState.removeObserver(handleGameStateUpdate);
    };
  }, [game]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
          gameController.handleUserInput('moveUp');
          break;
        case 'ArrowDown':
          gameController.handleUserInput('moveDown');
          break;
        case 'ArrowLeft':
          gameController.handleUserInput('moveLeft');
          break;
        case 'ArrowRight':
          gameController.handleUserInput('moveRight');
          break;
        case ' ':
          gameController.handleUserInput('attack');
          break;
        case 'i':
          gameController.handleUserInput('useItem');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [gameController]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <h1 className="text-4xl mb-4">Your Game Title</h1>
      <div className="grid grid-cols-6 gap-4">
        <GameMap gameMap={gameState.gameMap} />
      </div>
      <PlayerStatus player={gameState.player} />
      <GameLog gameLog={game.gameLog} />
    </div>
  );
};
