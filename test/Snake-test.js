const { assert } = require('chai');

const Snake = require('../lib/Snake.js');

describe('Snake', function() {
  it('should have properties', function() {
    const snake = new Snake(50, 50, 20, 20, 'rgb(200, 0, 0)', 1)
    
    const expectedObj = {
      x: 50,
      y: 50,
      height: 10,
      width: 10,
      color: 'rgb(250, 0, 0)',
    }
    assert.deepEqual(snake, expectedObj);
  })
})


const Block = require('../lib/Block.js');

describe('Snake', function() {
  it('should have properties', function() {
    const snake = new Snake(50, 50, 20, 20, 'rgb(200, 0, 0)', 1)
    
  })
})