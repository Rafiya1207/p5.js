let p1;
let p2;
let p3;
let p4;

class Point {
  constructor(r, position, angle = 0, speed = 2, thickness = 10) {
    this.angle = angle;
    this.speed = speed;
    this.x = 0;
    this.y = 0;
    this.r = r;
    this.thickness = thickness;
    this.position = position;
    this.update();
  }

  draw() {
    strokeWeight(this.thickness);
    point(this.x, this.y);
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

  p1 = new Point(50, width / 2, 90, 3);
  p2 = new Point(50, width / 2, 275, 3, 5);
  p3 = new Point(70, width / 2, 180, 3);
  p4 = new Point(70, width / 2, 10, 2, 5);
  
}

function draw() {
  background(255, 20);

  p1.draw();
  p1.update();
  p2.draw();
  p2.update();
  p3.draw();
  p3.update();
  p4.draw();
  p4.update();
}
