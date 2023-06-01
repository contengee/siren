// classes/Player.ts
import { DrawableObject } from './DrawableObject';
import { Item } from './Item';

export class Player extends DrawableObject {
    hp: number;
    attack: number;
    defense: number;
    direction: string;
    items: Item[];
    stage: number;

    constructor(
        hp: number,
        atk: number,
        def: number,
        direction: string,
        stage: number,
    ) {
        super(5, 5, "🥺");
        this.hp = hp;
        this.attack = atk;
        this.defense = def;
        this.direction = direction;
        this.items = Array.from({ length: 8 }, () => new Item("", 0, 0, ""));
        this.stage = stage;
    }

    // Get a string representation of the items
    get itemsString(): string {
        return this.items.map(item => item.name).join(', ');
    }
}