let bw = 600;
let bh = 600;
let p = 0;
let cw = bw + (p*2) + 1;
let ch = bh + (p*2) + 1;

const drawBackground = (ctx) => {
  for (let x = 0; x <= bw; x += 20) {
    ctx.moveTo(0.5 + x + p, p);
    ctx.lineTo(0.5 + x + p, bh + p);
  }

  for (let x = 0; x <= bh; x += 20) {
    ctx.moveTo(p, 0.5 + x + p);
    ctx.lineTo(bw + p, 0.5 + x + p);
  }

  ctx.strokeStyle = "rgb(213, 217, 224)";
  ctx.stroke();
}


module.exports = drawBackground;