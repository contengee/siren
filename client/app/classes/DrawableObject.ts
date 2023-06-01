// classes/DrawableObject.ts
import { IDrawable } from '../interfaces/IDrawable.interface';
import { Position } from '../interfaces/Position.interface';
import { Sprite } from '../components/Sprite';

export abstract class DrawableObject implements IDrawable {
    position: Position;
    sprite: Sprite;

    constructor(x: number, y: number, imageSrc: string) {
        this.position = {x, y};
        this.sprite = new Sprite(imageSrc, this.position);
    }

    draw(): JSX.Element {
        return this.sprite.draw();
    }
}