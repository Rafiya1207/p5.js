const palette = ["#CDB4DB", "#FFC8DD", "#FFAFCC", "#BDE0FE", "#A2D2FF"];

class Circle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.d = 10;
  }

  draw() {
    circle(this.x, this.y, this.d);
  }
}

function setup() {
  createCanvas(400, 400);
  background('#343a40');
  noStroke();
}

function draw() {
  fill(palette[frameCount % palette.length]);
  const c = new Circle();
  c.draw();
}
