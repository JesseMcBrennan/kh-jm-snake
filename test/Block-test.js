const { assert } = require('chai');
const Block = require('../lib/Block.js');

describe('Block', function() {

  it('should have properties', function() {
    const gamePiece = new Block(50, 50, 10, 10, 'rgb(250, 0, 0)', 1)
    const expectedObj = {
      x: 50,
      y: 50,
      height: 10,
      width: 10,
      color: 'rgb(250, 0, 0)',
      dx: 1,
      dxv: .5
    }
      assert.deepEqual(Block, expectedObj);
  })

  it('should be able to collide with other objects', function() {
    const Block = new Black(50, 50, 10, 10, 'rgb(250, 0, 0)', 1);
    const gamePiece2 = new GamePiece(58, 58, 10, 10, 'rgb(250, 0, 0)', 1);

   const isColliding = Block.isCollidingWith(gamePiece2);

   assert.isTrue(isColliding);
  })

  it('should not collide with objects when they do not overlap', function() {
    const gamePiece1 = new Block(50, 50, 10, 10, 'rgb(250, 0, 0)', 1);
    const gamePiece2 = new Blocl(65, 65, 10, 10, 'rgb(250, 0, 0)', 1);

   const isColliding = gamePiece1.isCollidingWith(gamePiece2);

   assert.isFalse(isColliding);
  })

  it('should be able to move', function() {
    const gamePiece1 = new Block(50, 50, 10, 10, 'rgb(250, 0, 0)', 1);

    gamePiece1.move();

    assert.equal(Block.x, 50.5)
  })
})