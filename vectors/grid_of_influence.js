let v;
let center;
let mouse;

const createVectors = () => {
  const vectors = [];
  for (let x = 0; x <= width; x += 50) {
    for (let y = 0; y <= height; y += 50) {
      const v = createVector(x, y);
      vectors.push(v);
    }
  }
  return vectors;
};

let vectors;

function setup() {
  createCanvas(400, 400);
  vectors = createVectors();
}

function draw() {
  background(220);
  mouse = createVector(mouseX, mouseY);
  vectors.forEach((v) => {
    const displacement = p5.Vector.sub(mouse, v);
    const distance = constrain(200 / displacement.mag(), 2, 80);
    const G = 1000;
    const strength = G / (distance * distance);
    displacement.rotate(HALF_PI);

    displacement.setMag(max(strength, 1));

    line(v.x, v.y, displacement.x + v.x, displacement.y + v.y);
  });
}
