const GamePiece = require('./GamePiece')

class Food extends GamePiece {
  constructor(x, y, height, width, color) {
    super(x, y, height, width, color) 
  }

  moveFood() {
   
  }

}

module.exports = Food;