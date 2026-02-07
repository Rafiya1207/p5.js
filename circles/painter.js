function setup() {
  createCanvas(400, 400);
  noStroke();
  background(0);

  strokeWeight(5);
}

function draw() {
  if (mouseIsPressed) {
    fill("#FFFFFF");
    circle(mouseX, mouseY, 5);
  }
}
