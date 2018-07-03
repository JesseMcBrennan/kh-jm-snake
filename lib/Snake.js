const Block = require('./Block.js');

class Snake {
  constructor(x, y, height, width, color, dx, dy, dxv, dyv, keyCode, direction) {
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
    this.head = null;
    this.body = [];
    this.tail = this.body[0];
    this.direction = 'right';
    this.block = new Block(50, 50, 20, 20, 'rgb(200, 0, 0)', 1);
  }

  makeSnake() {
    for (let i = 20; i < 100; i += 20) {
      let block = new Block(i, 20);

      this.body.push(block);
    }
    return this;
  }

  drawSnake(ctx) {
    this.body.forEach((block) => 
      block.drawBlock(ctx));
  }

  addBlock() {
    let newTail = this.tail;

    switch (this.oneDirection) {
    case 'up':
      y = newTail.y - 20;
      break;
    case 'down':
      y = newTail.y + 20;
      break;
    case 'left':
      x = newTail.x - 20;
      break;
    case 'right':
      x = newTail.x + 20;
      break;
    }

    let newBlock = new Block(newTail.x, newTail.y, 20, 20);

    this.body.unshift(newBlock);
    return this;

  }

  collideWithWall() {
    if (this.head.x + 20 > 600 || this.head.y + 20 > 600) {
      this.isGameOver = true;
    } else if (this.head.x  < 0 || this.head.y < 0) {
      this.isGameOver = true;
    }
  }

  collideWithSelf() {
    console.log(this.head.x, 'head x')
    let snakeBody = this.body.map((block) => {
      return this.block.x
      console.log(this.block.x, 'block x')
      })
      if (this.snakBody.x === this.head.x)  {
        console.log('BOOM')
      }
      
  }

  steerSnake() {
    this.tail = this.body.shift();
    this.head = this.body[this.body.length - 1];

    switch (this.direction) {
    case 'up':
      this.tail.y = this.head.y - 20;
      this.tail.x = this.head.x;
      break;
    case 'down':
      this.tail.x = this.head.x;
      this.tail.y = this.head.y + 20;
      break;
    case 'left':
      this.tail.x = this.head.x - 20;
      this.tail.y = this.head.y;
      break;
    case 'right':
      this.tail.y = this.head.y;
      this.tail.x = this.head.x + 20;
      break;
    }

    this.body.push(this.tail);
    return this;
  }
}

module.exports = Snake;
//move the block on the tail to the head


///shift first, update coordinates, push to array

//this.tail = this.snakeBody.shift

