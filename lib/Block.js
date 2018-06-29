module.exports = class Block {
  constructor(x, y, height = 10, width = 10, color, dx = 1, dy = 1) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = dx;
    this.dy = dy; // direction: 1 === right -1 ===;left
    this.dxv = .5; //velocity /speed
  }

  isCollidingWith(object) {
    return !(
      this.x + this.width < object.x ||
      this.y + this.height < object.y ||
      this.x > object.x + object.width || 
      this.y > object.y + object.height
    );
  }

  drawBlock(ctx) {
    const { x, y, height, width, color } = this;
    ctx.fillStyle = this.color;
    ctx.fillRect(x, y, height, width);
    return this;
  }

  move() {
    // this.x += this.dx * this.dxv;
  }
}
