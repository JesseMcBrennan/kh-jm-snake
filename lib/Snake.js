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
    this.tail = this.body[0];
    this.direction = 'right';
    this.block = new Block(50, 50, 20, 20, 'rgb(200, 0, 0)', 1);
  }

  makeSnake() {
    // const { x, y, height, width, color } = this;
    for(let i = 20; i < 100; i += 20) {
      let block = new Block(i, 20)
      this.body.push(block);
      // console.log(this.body)
      console.log('body')
    }
    return this;
  }

  drawSnake(ctx) {
    this.body.forEach((block) => 
      block.drawBlock(ctx))
  }

  collideWithWall() {
    if (this.snake.isCollidingWith(this.food))
      isGameOver = true;
  }

  direction(event) {
    if(direction != this.direction)
      this.direct = direction;
    return this;
  }

  //  moveSnake() {
  //     x += this.dx * this.dxv
  // }



  steerSnake(event) {
      let x;
      let y;
      this.tail = this.body.shift()
      this.head = this.body[this.body.length -1]

      switch (event) {
        case 'up':
        this.tail.y = this.head.y - 20;
        this.tail.x = this.head.x;
        console.log('up')
        break;
        case 'down':
        this.tail.x = this.head.x;
        this.tail.y = this.head.y + 20;
        console.log('down')
        break;
        case 'left':
        this.tail.x = this.head.x - 20;
        this.tail.y = this.head.y;
        console.log('left')
        break;
        case 'right':
        this.tail.y = this.head.y ;
        this.tail.x = this.head.x + 20;
        console.log('right')
        break;
      }
      this.body.push(this.tail);
      console.log(this.tail.x, 'x')
      console.log(this.tail.y, 'y')
      return this;
      // if(keyboard)
  }
}

module.exports = Snake;
//move the block on the tail to the head


///shift first, update coordinates, push to array

//this.tail = this.snakeBody.shift

