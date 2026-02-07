let img;
const density = " .:-=+*#%@"

function preload() {
  img = loadImage("./saturn.jpg");
}

function setup() {
  createCanvas(500, 600);
  noSmooth()
  img.loadPixels();
  background(255);
  // image(img, 0, 0, width, height);

  let w = width / img.width;
  let h = height / img.height;

  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      const pixelIndex = (x + y * img.width) * 4;
      const r = img.pixels[pixelIndex];
      const g = img.pixels[pixelIndex + 1];
      const b = img.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      const charIndex = floor(map(avg, 0, 255, 0, density.length));

      // noStroke();
      // fill(r,g,b);
      // square(x * w, y * h, w);
      textSize(w);
      textAlign(CENTER, CENTER)
      text(density[charIndex], x * w + w * 0.5, y * h + h * 0.5);   
    }
  }
}
