const Block = require('./Block.js');
const Food = require('./Food.js')
const Snake = require('./Snake.js')
const index = require('./index.js')


// const firstBlock = new Block(50, 50, 10, 10, 'rgb(200, 0, 0)', 1);

// const snake = new Snake(50, 50, 10, 10, 'rgb(200, 0, 0)', 1)
// const food = new Food(50, 50, 10, 10, 'rgb(0, 200, 0)')

// console.log(firstBlock.x);  // 50


// ctx.fillStyle = "rgba(0, 255, 0, 1)";
//  x, y, width, height

var x = 50;
var y = 50;

// var blocks = [
//   firstBlock,
// ];

var isGameOver = false;

class Game {
  constructor() {
    this.lives = 3;
    this.block = new Block();
    this.snake = new Snake(50, 50, 10, 10, 'rgb(200, 0, 0)', 1)
    this.food = new Food(50, 50, 10, 10, 'rgb(0, 200, 0)')
}

  animate(ctx) {
        this.snake.drawSnake(ctx)
        this.snake.moveSnake();
        this.food.drawFood(ctx)
    // blocks.forEach(function (block, i) {
    //   block.draw(ctx)
    //   snake.draw()
    //   block.move();

    //   blocks.forEach(function (block2, j) {
    //     if (i !== j && block.isCollidingWith(block2)) {
    //       block.dx = 0;
    //       block2.dx = 0;
    //       isGameOver = true;
    //     }
    //   })
    // })
  }
}

module.exports = Game;





