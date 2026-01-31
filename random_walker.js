class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }
  draw() {
    stroke(255);
    strokeWeight(10);
    point(this.x, this.y);
  }
  step() {
    let xstep = map(mouseX, 0, width, -1, 1);
    let ystep = map(mouseY, 0, height, -1, 1);
    if (this.x < 0 && this.y < 0) {
      xstep = 1;
      ystep = 1;
    }
    this.x += xstep;
    this.y += ystep;
  }
}

let walker;

function setup() {
  createCanvas(400, 400);
  walker = new Walker();
}

function draw() {
  background(0, 10);

  walker.draw();
  walker.step();
}
