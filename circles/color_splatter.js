const palette = ["#CDB4DB", "#FFC8DD", "#FFAFCC", "#BDE0FE", "#A2D2FF"];

let slider;
let diameterSlider;

function createControls() {
  slider = createSlider(5, 80, 30);
  slider.position(0, height);
  slider.size(80);

  diameterSlider = createSlider(0, 15, 5);
  diameterSlider.position(5, height + 20);
  diameterSlider.size(80);
}

function setup() {
  createCanvas(500, 400);
  
  createControls();
}

function draw() {
  background(0, 15);

  const deviation = slider.value();
  const diameterDeviation = diameterSlider.value();
  const x = randomGaussian(width/2, deviation);
  const y = randomGaussian(height/2, deviation);

  let d = randomGaussian(10, diameterDeviation);

  const colour = random(palette);
  noStroke();
  fill(colour);
  circle(x, y, d);
}
