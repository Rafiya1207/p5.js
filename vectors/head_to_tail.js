let center;
let v;

function setup() {
  createCanvas(400, 400);
  center = createVector(width / 2, height / 2);
  v = createVector(100, 50);
}

function draw() {
  background(220);

  let tipA = p5.Vector.add(center, v);
  let mouse = createVector(mouseX, mouseY);

  let vB = p5.Vector.sub(mouse, tipA);

  const r = p5.Vector.add(v, vB);

  strokeWeight(2);

  stroke("blue");
  line(center.x, center.y, tipA.x, tipA.y);

  stroke("green");
  line(tipA.x, tipA.y, mouse.x, mouse.y);

  stroke("red");
  line(center.x, center.y, mouse.x, mouse.y);
}
