import React from 'react';
import { Floor } from '../../../client/app/classes/Floor';

interface Props {
    floor: Floor;
}

const FloorComponent: React.FC<Props> = ({ floor }) => {
    return floor.draw();
};

export default FloorComponent;
