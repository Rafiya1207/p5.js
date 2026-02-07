let angle;
function setup() {
  createCanvas(400, 400);
  background(220);

  angle = 0;
}

const palette = [
  "#10002b",
  "#240046",
  "#3c096c",
  "#5a189a",
  "#7b2cbf",
  "#9d4edd",
  "#c77dff",
  "#e0aaff",
];

function draw() {
  translate(width / 2, height / 2);
  rotate(angle);
  noFill();
  ellipse(0, 0, 250, 100);
  angle += 0.1;
  stroke(palette[frameCount % palette.length]);
}
