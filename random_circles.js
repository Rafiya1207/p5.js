const palette = ["#CDB4DB", "#FFC8DD", "#FFAFCC", "#BDE0FE", "#A2D2FF"];

class Circle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.d = floor(random(20));
    this.color = random(palette);
  }

  draw(fill) {
    fill(this.color);
    circle(this.x, this.y, this.d);
  }
}

function setup() {
  createCanvas(400, 400);
  background(0);
  stroke(255);
}

function draw() {
  const c = new Circle();
  c.draw(fill);
}
