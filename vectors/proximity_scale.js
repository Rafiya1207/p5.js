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
  let distance = constrain(v.mag(), 50, 250);

  v.setMag(5000 / distance);
  line(center.x, center.y, center.x + v.x, center.y + v.y);
}
