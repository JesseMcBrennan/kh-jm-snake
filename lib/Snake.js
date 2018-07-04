const Block = require('./Block.js');

class Snake {
  constructor(x, y, height, width, color, dx, dy, dxv, dyv, keyCode, direction) {
    this.keyCode = keyCode; 
    this.gameOver = false;
    this.head = null;
    this.body = [];
    this.tail = this.body[0];
    this.direction = 'right';
    this.block = new Block(50, 50, 20, 20, '#000000', 1);
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
      this.isDead = true;
    } else if (this.head.x  < 0 || this.head.y < 0) {
      this.isGameOver = true;
      this.isDead = true;
    }
  }

  collideWithSelf() {
    for(let i = 0; i < this.body.length - 2; i++) {
      if (this.head.x == this.body[i].x && this.head.y == this.body[i].y) {
        this.isGameOver = true;
        this.isDead = true;
      }    
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


