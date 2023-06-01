// client/app/models/GameService.ts
import { Game } from '../../../server/src/models/Game';
import { GameState } from './GameState';
import { GameLog } from '../../../server/src/models/GameLog';
import { GameMap } from '../classes/GameMap';
import { PlayerAction, ActionResult } from './PlayerAction'; // 追加

export class GameService {
  game: Game;
  gameState: GameState;
  gameLog: GameLog;
  gameMap: GameMap;
  enemySpawnCounter: number;

  constructor(gameState: GameState, gameLog: GameLog) {
      this.gameState = gameState;
      this.gameLog = gameLog;
      this.gameMap = new GameMap(6);
      this.enemySpawnCounter = 0;
  }

  // 追加: マップ生成メソッド
  generateMap(): void {
    this.gameMap.generate();
    // 生成したマップをゲームステートに反映させるロジックをここに書く
  }

  handlePlayerAction(action: PlayerAction): ActionResult {
    let result: ActionResult = {
        isActionCompleted: false,
        actionLog: '',
    };
    // プレイヤーアクションを処理します
    switch(action.type) {
      case 'move':
          // プレイヤーが移動する処理を書く
          // 成功したら isActionCompleted を true に
          break;
      case 'attack':
          // プレイヤーが攻撃する処理を書く
          // 成功したら isActionCompleted を true にし、actionLog に適切なメッセージを設定
          break;
      case 'useItem':
          // プレイヤーがアイテムを使う処理を書く
          // 成功したら isActionCompleted を true にし、actionLog に適切なメッセージを設定
          break;
      case 'turn':
          // プレイヤーが向きを変える処理を書く
          break;
      case 'openStatus':
          this.gameState.openStatusScreen();
          result.actionLog = "ステータス画面を開きました";
          break;
      case 'closeStatus':
          this.gameState.closeStatusScreen();
          result.actionLog = "ステータス画面を閉じました";
          break;
      case 'selectItem':
          if (this.gameState.isStatusScreenOpen()) {
              // アイテム選択処理を書く
              // 成功したら isActionCompleted を true にし、actionLog に適切なメッセージを設定
          }
          break;
  }

    // アクションが成功した場合は敵の出現カウンターを増やします
    if(result.isActionCompleted) {
      this.enemySpawnCounter++;
      if(this.enemySpawnCounter >= 5) {
          this.spawnEnemy(); // 敵を出現させるメソッドを書く
          this.enemySpawnCounter = 0;
      }
  }
  return result;
}

handleEnemyAction(action: string): boolean {
  let isActionValid = false;
  // Handle the action based on the given rules
  switch(action) {
      case "move":
      case "attack":
          isActionValid = true;
          break;
      default:
          isActionValid = false;
          break;
  }
  return isActionValid;
}

openStatusScreen(): void {
  // ステータス画面を表示するロジックを書く
  // プレイヤーのステータスやアイテム情報を表示し、選択肢を処理する
}

closeStatusScreen(): void {
  // ステータス画面を閉じるロジックを書く
  // ステータス画面を非表示にし、ゲームの進行を再開する
}

handleEnemyTurn(): void {
  // 敵のターンを処理...
}
}