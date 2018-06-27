const GamePiece = require('./GamePiece.js');
const Food = require('./Food.js')
const Snake = require('./Snake.js')
const index = require('./index.js')
const firstBlock = new GamePiece(50, 50, 10, 10, 'rgb(200, 0, 0)', 1);
const secondBlock = new GamePiece(61, 50, 10, 10, 'rgb(0, 200, 0)', 1);
const fourthBlock = new GamePiece(72, 50, 10, 10, 'rgb(0, 200, 0)', 1);

console.log(firstBlock.x);  // 50
console.log(secondBlock.x); // 75

// ctx.fillStyle = "rgba(0, 255, 0, 1)";
//  x, y, width, height

var x = 50;
var y = 50;

var blocks = [
  firstBlock,
  secondBlock,
  fourthBlock
];

var foods = [];

var isGameOver = false;

class Game {
  constructor() {
    this.lives = 3;
    this.GamePiece = new GamePiece();
}

  animate(ctx) {
    blocks.forEach(function (block, i) {
      block.draw(ctx)
      block.move();

      blocks.forEach(function (block2, j) {
        if (i !== j && block.isCollidingWith(block2)) {
          block.dx = 0;
          block2.dx = 0;
          isGameOver = true;
        }
      })
    })
  }
}

module.exports = Game;

//   animate() {
//   blocks.forEach(function (block, i) {
//     block.draw(ctx)
//     block.move();

//     blocks.forEach(function (block2, j) {
//       if (i !== j && block.isCollidingWith(block2)) {
//         block.dx = 0;
//         block2.dx = 0;
//         isGameOver = true;
//     }
//   })
// })
// })



