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
    // this.head = null;
    // this.body = [];
    // this.direction = 'right';
  }

  // makeSnake() {
  //   for (let l = 10; l < 30; l += 10) {
  //     let block = new Block(x, 10)
  //     this.body.push(block);
  //   }
  //   return this
  // }

  drawSnake(ctx) {
    const { x, y, height, width, color } = this;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, height, width)
    return this;
  }

   moveSnake() {
    // if(this.y += this.dy * this.dyv) {
    // } else {
    // }
      this.x += this.dx * this.dxv

  }

  steerSnake(event) {
      switch (event) {
        case 'up':
        this.dx += this.dy * this.dyx;
        console.log('movin on up');
        break;
        case 'down':
        this.dx += this.dy * this.dyx;
        console.log('movin on down');
        break;
        case 'left':
        console.log('movin on left');
        break;
        case 'right':
        console.log('movin on right');
        break;
      }
      console.log('x', this.x)
      console.log('y', this.y)
      // if(keyboard)
  }
}

module.exports = Snake;
//move the block on the tail to the head

