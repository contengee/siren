// GameController.ts
import { Game } from '../../../server/src/models/Game';

export class GameController {
    private game: Game;

    constructor(game: Game) {
        this.game = game;
    }

    handleUserInput(action: string): void {
        this.game.handleAction(action);
    }
}