let p1;
let p2;

class Point {
  constructor(r, position, angle = 0, speed = 2) {
    this.angle = angle;
    this.speed = speed;
    this.x = 0;
    this.y = 0;
    this.r = r;
    this.position = position;
    this.update();
  }

  draw() {
    point(this.x, this.y);
    console.log(this.x / 2, this.y / 2);
  }

  update() {
    this.x = this.r * cos(this.angle) + this.position;
    this.y = this.r * sin(this.angle) + this.position;
    this.angle += this.speed;
  }
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

  p1 = new Point(10, width / 2);
  p2 = new Point(10, width / 2);
}

function draw() {
  background(220, 30);
  strokeWeight(10);

  p1.draw();
  p1.update();
  p2.draw();
  p2.update();
}
