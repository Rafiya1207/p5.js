class Lines {
  constructor(x, y, gap, colour, thickness) {
    this.x = x;
    this.y = y;
    this.gap = gap;
    this.colour = colour;
    this.thickness = thickness;
  }

  draw() {
    strokeWeight(this.thickness);
    stroke(this.colour);
    line(0, this.y, width, this.y);
    line(this.x, 0, this.x, height);
  }

  update() {
    this.x += this.gap;
    this.y += this.gap;
  }

  isDone() {
    return this.y > height && this.x > width;
  }
}

function setup() {
  createCanvas(510, 500);
  background(255);

  const h = new Lines(0, 0, 15, "#2b2d42", 5);
  const h2 = new Lines(5, 5, 25, "#bb194c", 3);

  while (!(h.isDone() && h2.isDone())) {
    h.draw();
    h.update();
    h2.draw();
    h2.update();
  }
}
