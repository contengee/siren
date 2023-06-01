import React from 'react';
import { Block } from '../classes/Block';

interface Props {
    block: Block;
}

const BlockComponent: React.FC<Props> = ({ block }) => {
    return block.draw();
};

export default BlockComponent;
