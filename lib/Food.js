const GamePiece = require('./GamePiece')

class Food extends GamePiece {
  constructor(x, y, height, width, color) {
    super(x, y, height, width, color) 
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.drawFood = this.drawFood.bind(this)
  }
}