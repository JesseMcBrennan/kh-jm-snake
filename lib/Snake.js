const GamePiece = require('./GamePiece.js');

class Snake {
  constructor(context) {
    this.makeSnake = this.makeSnake.bind(this);
    this.head = null;
    this.body = [];
    this.direction = 'right';
  }

  makeSnake() {
    for (let l = 10; l < 30; l += 10) {
      let block = new GamePiece(x, 10)
      this.body.push(block);
    }
    return this
  }

}

module.exports = Snake;
//move the block on the tail to the head

