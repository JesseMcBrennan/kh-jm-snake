const GamePiece = require('./GamePiece.js');

class Snake {
  constructor(context) {
    this.makeSnake = this.makeSnake.bind(this);
    this.body = [];
    this.direction = 'right';
    this.head = null;
  }

  makeSnake() {
    for(let x = 10; x < 76 ; x += 10) {
      let block = newBlock(x, 10);
      this.body.push(block);
    }
    return this;
  }
}