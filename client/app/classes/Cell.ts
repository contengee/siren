// classes/Cell.ts
export class Cell {
    public value: number;
    containsPlayer: boolean;
    containsEnemy: boolean;
    containsItem: boolean;
    isWall: boolean;

    constructor(value: number) {
        this.value = value;

        this.containsPlayer = false;
        this.containsEnemy = false;
        this.containsItem = false;
        this.isWall = false;

        switch (value) {
            case 1:
                this.containsPlayer = true;
                break;
            case 2:
                this.containsEnemy = true;
                break;
            case 3:
                this.containsItem = true;
                break;
            case 4:
                this.isWall = true;
                break;
            default:
                // Handle other cases as needed
                break;
        }
    }
}
