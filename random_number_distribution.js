let randomCounts = [];
let total = 20;

function setup() {
  createCanvas(640, 640);
  for (let i = 0; i < total; i++) {
    randomCounts[i] = 0;
  }
}

let index = 0;

function draw() {
  background(255);

  randomCounts[index]++;
  
  stroke(0);
  fill(127);
  
  let w = width / randomCounts.length;
  for (let x = 0; x < randomCounts.length; x++) {
    rect(height - randomCounts[x], 0,  randomCounts[x], w - 2);
  }
}