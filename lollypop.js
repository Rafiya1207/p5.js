const palette = ["#03045e", "#0077b6", "#00b4d8", "#90e0ef", "#caf0f8"];

class Circle {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.d = 0;
    this.max = 200;
    this.min = 0;
    this.isMax = false;
    this.delta = 2;
    this.colorIndex = 0;
    this.fillColor = palette[this.colorIndex];
    this.strokeColor = palette[this.colorIndex];
  }
  draw(fill, stroke) {
    if (this.d > this.max) {
      this.isMax = true;
      this.strokeColor = palette[++this.colorIndex % palette.length];
    }
    if (this.d < this.min) {
      this.max -= 10;
      this.fillColor = palette[this.colorIndex % palette.length];
      this.isMax = false;
    }
    if (this.isMax) {
      this.d -= this.delta;
    } else {
      this.d += this.delta;
    }
    console.log(this.strokeColor);
    stroke(this.strokeColor);
    fill(this.fillColor);
    circle(this.x, this.y, this.d);
  }
}

let c;
function setup() {
  createCanvas(400, 400);
  background(255);
  c = new Circle();
}

function draw() {
  c.draw(fill, stroke);
}
