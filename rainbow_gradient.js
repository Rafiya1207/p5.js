class Color {
  constructor() {
    this.r = 255;
    this.g = 0;
    this.b = 0;
    this.screenCount = 0;
    this.delta = 3;
  }

  increment(color, setStroke) {
    while (color !== 255) {
      color += this.delta;
      setStroke(color);
      line(0, this.screenCount, width, this.screenCount);
      this.screenCount++;
    }
    return color;
  }

  decrement(color, setStroke) {
    while (color !== 0) {
      color -= this.delta;
      setStroke(color);
      line(0, this.screenCount, width, this.screenCount);
      this.screenCount++;
    }
    return color;
  }

  addColors() {
    this.g = this.increment(this.g, (g) => stroke(this.r, g, this.b));
    this.r = this.decrement(this.r, (r) => stroke(r, this.g, this.b));
    this.b = this.increment(this.b, (b) => stroke(this.r, this.g, b));
    this.g = this.decrement(this.g, (g) => stroke(this.r, g, this.b));
    this.r = this.increment(this.r, (r) => stroke(r, this.g, this.b));
    this.b = this.decrement(this.b, (b) => stroke(this.r, this.g, b));
  }
}

function setup() {
  createCanvas(400, 500);
  background(200);

  const c = new Color();
  c.addColors();
}
