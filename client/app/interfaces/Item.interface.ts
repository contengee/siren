export interface Item {
  id: string;
  x: number;
  y: number;
  type: string; // type of the item: sword, shield, potion, etc.
  value: number; // value of the item: attack strength, defense strength, healing power, etc.
  // ...and so on
}
