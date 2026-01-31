function drawWall(rect) {
  const brickWidth = 80;
  const brickHeight = brickWidth / 3;
  let xStart = brickWidth / 2;

  for (let y = 0; y < height; y += brickHeight) {
    xStart = xStart - (brickWidth / 2);

    for (let x = xStart; x < width; x += brickWidth) {
      rect(x, y, brickWidth, brickHeight);
    }
  }
}

function setup() {
  createCanvas(400, 400);
  background(220);
  drawWall(rect);
}
