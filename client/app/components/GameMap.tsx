// components/GameMap.tsx
import { GameMap as GameMapClass } from '../classes/GameMap';
import { MapCell } from './MapCell';
import { Cell } from '../classes/Cell';

interface GameMapProps {
  gameMap: GameMapClass;
}

export const GameMap: React.FC<GameMapProps> = ({ gameMap }) => {
    const cells = gameMap.getMap().map((row, rowIndex) => row.map((cellValue, cellIndex) => new Cell(cellValue)));

  return (
    <div className="game-map">
      {cells.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, cellIndex) => (
            <MapCell key={cellIndex} cell={cell} />
          ))}
        </div>
      ))}
    </div>
  );
};
