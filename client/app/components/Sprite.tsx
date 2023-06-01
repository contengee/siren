import { Position } from '../interfaces/Position.interface';

export class Sprite {
  private imageSrc: string;
  private position: Position;

  constructor(imageSrc: string, position: Position) {
    this.imageSrc = imageSrc;
    this.position = position;
  }

  draw(): JSX.Element {
    return (
      <img src={this.imageSrc} style={{ position: 'absolute', left: `${this.position.x}px`, top: `${this.position.y}px` }} />
    );
  }
}
