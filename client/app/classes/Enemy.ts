// classes/Enemy.ts
import { DrawableObject } from './DrawableObject';

export class Enemy extends DrawableObject {
    constructor(
        public hp: number,
        public atk: number,
        public def: number,
        public direction: string
    ) {
        super(3,3,"●");
    }
}