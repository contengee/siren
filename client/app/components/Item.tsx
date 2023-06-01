import React from 'react';
import { Item } from '../classes/Item';

interface Props {
    item: Item;
}

const ItemComponent: React.FC<Props> = ({ item }) => {
    return item.draw();
};

export default ItemComponent;
