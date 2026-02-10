function setup() {
  createCanvas(400, 400);
  background(220);

  let center = createVector(width / 2, height / 2);
  let vA = createVector(100, 50);
  let vB = createVector(-50, 100);

  let vC = p5.Vector.add(vA, vB).mult(-1);

  let tipA = p5.Vector.add(center, vA);
  let tipB = p5.Vector.add(tipA, vB);
  let tipC = p5.Vector.add(tipB, vC);

  strokeWeight(2);

  stroke("blue");
  line(center.x, center.y, tipA.x, tipA.y);

  stroke("green");
  line(tipA.x, tipA.y, tipB.x, tipB.y);

  stroke("red");
  line(tipB.x, tipB.y, tipC.x, tipC.y);
}
