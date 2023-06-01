// PlayerAction.ts
export interface PlayerAction {
    type: 'move' | 'attack' | 'useItem' | 'turn' | 'openStatus' | 'closeStatus' | 'selectItem';
    direction?: 'up' | 'down' | 'left' | 'right';
    selectedItemIndex?: number; // アイテム選択時に使用
}