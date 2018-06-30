const Block = require('./Block')

class Food extends Block {
  constructor(x, y, height, width, color) {
    super(height, width, color) 
    this.x = x = (Math.floor(Math.random() * 65) * 10);
    this.y = y =(Math.floor(Math.random() * 65) * 10);
    this.height = height;
    this.width = width;
    this.color = color;
  }

  drawFood(ctx) {
    const { x, y, height, width, color } = this;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, height, width);
    return this;
  }
  //collision detection - change positions when eaten

}

module.exports = Food;