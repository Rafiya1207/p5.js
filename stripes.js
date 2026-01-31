const palette = ["#faf3dd", "#ffa69e"];
class Line {
  constructor() {
    this.startX = 0;
    this.endX = 0;
    this.startY = 0;
    this.endY = 0;
    this.stripSize = 30;
  }
  draw(line) {
    line(this.startX, this.startY, this.endX, this.endY);
  }
  update() {
    this.startY += this.stripSize;
    this.endX += this.stripSize;
  }
}

function setup() {
  createCanvas(400, 400);
  background(255);
  strokeWeight(30);
  const l = new Line();
  let colorIndex = 0;
  for (let index = 0; index < 100; index++) {
    stroke(palette[colorIndex]);
    colorIndex = 1 - colorIndex;
    l.draw(line);
    l.update();
  }
}
