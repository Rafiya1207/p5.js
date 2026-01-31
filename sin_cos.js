class Walker {
  constructor() {
    this.x1 = 0;
    this.y1 = 0;
    this.x2 = 0;
    this.y2 = 0;
  }

  showSin() {
    stroke(0);
    strokeWeight(3);
    point(this.x1, this.y1);
  }

  stepSin() {
    const deltaX = 50 * sin(this.y1 * 5) + width / 2;
    const deltaY = 1;

    this.x1 = deltaX;
    this.y1 += deltaY;
  }

  showCos() {
    stroke(0);
    strokeWeight(3);
    point(this.x2, this.y2);
  }

  stepCos() {
    const deltaX = 50 * cos(this.y2 * 5) + width / 2;
    const deltaY = 1;

    this.x2 = deltaX;
    this.y2 += deltaY;
  }
}

let walker;

function setup() {
  createCanvas(400, 400);
  walker = new Walker();
  background(220);
  stroke(255);
  line(0, height / 2, width, height / 2);
  line(width / 2, 0, height / 2, width);
  angleMode(DEGREES);
}

function draw() {
  walker.showSin();
  walker.stepSin();
  walker.showCos();
  walker.stepCos();
}
