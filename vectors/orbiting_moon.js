let pos;
let vel;

function setup() {
  createCanvas(400, 400);
  pos = createVector(100, 100);
  vel = createVector(2, 0);
}

function draw() {
  background(220);
  const mouse = createVector(mouseX, mouseY);
  const vG = p5.Vector.add(pos, mouse);
  const distance = max(vG.mag(), 1);
  const acceleration = 1000 / (distance * distance);

  vel.add(acceleration);
  pos.add(vel);
  circle(pos.x, pos.y, 10);
}
