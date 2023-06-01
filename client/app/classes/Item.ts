// classes/Item.ts
import { DrawableObject } from './DrawableObject';

export class Item extends DrawableObject {
    name: string;

    constructor(name: string, x: number, y: number, imageSrc: string) {
        super(x, y, imageSrc);
        this.name = name;
    }
}