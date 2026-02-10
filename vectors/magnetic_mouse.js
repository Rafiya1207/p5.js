let v;
let center;
let mouse;

function setup() {
  createCanvas(400, 400);
  center = createVector(width / 2, height / 2);
}

function draw() {
  background(220);
  mouse = createVector(mouseX, mouseY);
  v = p5.Vector.sub(mouse, center);
  v.normalize();
  v.mult(50);
  
  strokeWeight(4);
  stroke(0);
  line(center.x, center.y, center.x + v.x, center.y + v.y);
  
  circle(center.x + v.x, center.y + v.y, 5)
}
