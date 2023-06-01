import React from 'react';
import { Enemy } from '../../../client/app/classes/Enemy';

interface Props {
    enemy: Enemy;
}

const EnemyComponent: React.FC<Props> = ({ enemy }) => {
    return enemy.draw();
};

export default EnemyComponent;
