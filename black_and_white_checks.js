function drawLines(drawLine, screenWidth, screenHeight, lineSize = 10) {
  const maxSize = Math.max(screenWidth, screenHeight)
  for (
    let startPosition = 0;
    startPosition < maxSize;
    startPosition += 2 * lineSize
  ) {
    drawLine(0, startPosition, screenWidth, startPosition);
    drawLine(startPosition, 0, startPosition, screenHeight);
  }
}

function setup() {
  createCanvas(400, 400);
  background(220);
  stroke(0, 0, 0, 150);
  const lineSize = 20;
  strokeWeight(lineSize);
  drawLines(line, width, height, lineSize);
}
