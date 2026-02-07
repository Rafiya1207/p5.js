let circles = [];
const palette = ["#0077b6", "#03045e"];

function setup() {
  createCanvas(500, 500);
}

function drawCircles() {
  strokeWeight(circles[0].sw);
  stroke("#03045e");
  fill("#03045e");
  circle(circles[0].x, circles[0].y, circles[0].d);

  for (let index = 0; index < circles.length; index++) {
    const c = circles[index];
    strokeWeight(c.sw);
    c.sw += 0.09;
    stroke("#0077b6");
    fill("#03045e");
    circle(c.x, c.y, c.d);
    c.d += 15;
    if (c.d >= width * 1.7) {
      circles.splice(index, 1);
    }
  }
}

function draw() {
  circles.push({ x: width / 2, y: height / 2, d: 100, sw: 0 });
  if (frameCount % 10 === 0) {
    circles.push({ x: width / 2, y: height / 2, d: 102, sw: 0 });
  }
  drawCircles();
}
