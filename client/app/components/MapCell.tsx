// components/MapCell.tsx
import React from 'react';
import { Cell } from '../classes/Cell';

interface MapCellProps {
  cell: Cell;
}

export const MapCell: React.FC<MapCellProps> = ({ cell }) => {
  let cellStyle;
  let cellContent;  // Declare the variable cellContent

  if (cell.containsPlayer) {
    cellStyle = "bg-blue-500";
    cellContent = <div className="player">P</div>;
  } else if (cell.containsEnemy) {
    cellStyle = "bg-red-500";
    cellContent = <div className="enemy">E</div>;
  } else if (cell.containsItem) {
    cellStyle = "bg-green-500";
    cellContent = <div className="item">I</div>;
  } else if (cell.isWall) {
    cellStyle = "bg-black";
    cellContent = <div className="wall">W</div>;
  } else {
    cellStyle = "bg-white";
    cellContent = <div className="floor">.</div>;
  }

  return (
    <div className={`cell ${cellStyle}`}>
      {cellContent}  // Include cellContent in the return
    </div>
  );
};
