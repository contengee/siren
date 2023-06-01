import { Position } from './Position.interface';

export interface ICharacter {
    hp: number;
    atk: number;
    def: number;
    position: Position;
    direction: string;
}
