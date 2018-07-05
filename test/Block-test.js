const { assert } = require('chai');
const Block = require('../lib/Block.js');

describe('Block', function() {

  it('should have properties', function() {
    const block = new Block(50, 50, 20, 20, 'rgb(250, 0, 0)', 1)

    const expectedObj = {
      x: 50,
      y: 50,
      height: 20,
      width: 20,
      color: 'rgb(250, 0, 0)',
      dx: 1,
      dxv: .5
    }
      assert.deepEqual(block, expectedObj);
  })

  it('should be able to collide with other objects', function() {
    const block = new Block(50, 50, 10, 10, 'rgb(250, 0, 0)', 1);
    const block2 = new Block(58, 58, 10, 10, 'rgb(250, 0, 0)', 1);

   const isColliding = block.isCollidingWith(block2);

   assert.isTrue(isColliding);
  })

  it('should not collide with objects when they do not overlap', function() {
    const block1 = new Block(50, 50, 10, 10, 'rgb(250, 0, 0)', 1);
    const block2 = new Block(65, 65, 10, 10, 'rgb(250, 0, 0)', 1);

   const isColliding = block1.isCollidingWith(block2);

   assert.isFalse(isColliding);
  })
})