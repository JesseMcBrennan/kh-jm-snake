const Block = require('./Block.js');

class Snake {
  constructor(x, y, height, width, color, dx, dy, dxv,dyv, keyCode, direction) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = dx;
    this.dy = dy; // direction: 1 === right -1 ===;left
    this.dxv = .5;
    this.dyv = .5;
    this.keyCode = keyCode; //velocity /speed
    this.direction = direction;
    this.head = null;
    this.body = [];
    this.direction = 'right';
  }

  makeSnake() {
    for(let l = 10; l < 100; l += 20) {
      let block = new Block(this.x, 20)
      this.body.push(this.block);
    }
    return this
  }

  drawSnake(ctx) {
    const { x, y, height, width, color } = this;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, height, width)
    return this;
  }

  collideWithWall() {
    if (this.snake.isCollidingWith(this.food))
      isGameOVer = true;
  }

   moveSnake() {
      x += this.dx * this.dxv
  }

  steerSnake(event) {
      let x;
      let y;

      switch (event) {
        case 'up':
        y += this.y + 20;
        break;
        case 'down':
        y += this.y - 20;
        break;
        case 'left':
        x -= this.x - 20;
        break;
        case 'right':
        x += 20;
        break;
      }
      console.log('x', this.x)
      console.log('y', this.y)
      // if(keyboard)
  }
}

module.exports = Snake;
//move the block on the tail to the head

