const GamePiece = require('./GamePiece')

class Food extends GamePiece {
  constructor(x, y, height, width, color) {
    super(height, width, color) 
    this.x = x(Math.floor(Math.random() * 40) * 10);
    this.y = y(Math.floor(Math.random() * 40) * 10);
    this.color = blue;
  }

  moveFood() {

  }

}

module.exports = Food;