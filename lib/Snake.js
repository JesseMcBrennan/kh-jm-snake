const GamePiece = require('./GamePiece.js');

class Snake {
  constructor(context) {
    this.makeSnake = this.makeSnake.bind(this);
    this.body = [];
    this.direction = 'right';
    this.head = null;
  }
}