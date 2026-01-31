class Color {
  constructor(drawLine, stroke, width) {
    this.r = 255;
    this.g = 0;
    this.b = 0;
    this.screenCount = 0;
    this.delta = 3;
    this.drawLine = drawLine;
    this.stroke = stroke;
    this.width = width;
  }

  increment(color, setStroke) {
    while (color !== 255) {
      color += this.delta;
      setStroke(color);
      this.drawLine(this.width, this.screenCount++);
    }
    return color;
  }

  decrement(color, setStroke) {
    while (color !== 0) {
      color -= this.delta;
      setStroke(color);
      this.drawLine(this.width, this.screenCount++);
    }
    return color;
  }

  addColors() {
    this.g = this.increment(this.g, (g) => this.stroke(this.r, g, this.b));
    this.r = this.decrement(this.r, (r) => this.stroke(r, this.g, this.b));
    this.b = this.increment(this.b, (b) => this.stroke(this.r, this.g, b));
    this.g = this.decrement(this.g, (g) => this.stroke(this.r, g, this.b));
    this.r = this.increment(this.r, (r) => this.stroke(r, this.g, this.b));
    this.b = this.decrement(this.b, (b) => this.stroke(this.r, this.g, b));
  }
}

function setup() {
  createCanvas(400, 500);
  background(200);

  const drawLine = (w, count) => line(0, count, w, count);
  const c = new Color(drawLine, stroke, width);
  c.addColors();
}
