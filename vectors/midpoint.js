function setup() {
  createCanvas(400, 400);
  background(220);

  let center = createVector(width / 2, height / 2);
  let vA = createVector(100, 50);
  let vB = createVector(-50, 100);

  let tipA = p5.Vector.add(center, vA);
  let tipB = p5.Vector.add(center, vB);
  let vM = p5.Vector.add(vA, vB).div(2);

  strokeWeight(2);

  stroke("blue");
  line(center.x, center.y, tipA.x, tipA.y);

  stroke("green");
  line(center.x, center.y, tipB.x, tipB.y);

  stroke("red");
  line(tipA.x, tipA.y, tipB.x, tipB.y);

  stroke("black");
  fill("black");
  circle(center.x + vM.x, center.y + vM.y, 5);
}
