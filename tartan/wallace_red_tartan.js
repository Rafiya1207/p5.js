const palette = {
  amberFlame: "#f8b80b80",
  pitchBlack: "#1b161280",
  brickEmber: "#c3020a99",
};

const sett = [
  {
    x: 0,
    y: 0,
    colour: palette.pitchBlack,
    gap: 80,
    thickness: 80,
  },
  {
    x: 80,
    y: 80,
    colour: palette.pitchBlack,
    gap: 80,
    thickness: 3,
  },
  {
    x: 0,
    y: 0,
    colour: palette.amberFlame,
    gap: 80,
    thickness: 5,
  },
];

const drawHorizontals = () => {
  let stripeIndex = 0;
  let countOfStripesFilled = 0;

  const x = 0;

  while (countOfStripesFilled !== sett.length) {
    const stripe = sett[stripeIndex++ % sett.length];
    stroke(stripe.colour);
    strokeWeight(stripe.thickness);
    line(x, stripe.y, width, stripe.y);

    if (stripe.y > height * 1.7) {
      countOfStripesFilled++;
    }

    stripe.y += stripe.gap * 2;
  }
};

const drawVerticals = () => {
  let countOfStripesFilled = 0;
  let stripeIndex = 0;

  const y = 0;

  while (countOfStripesFilled !== sett.length) {
    const stripe = sett[stripeIndex++ % sett.length];
    stroke(stripe.colour);
    strokeWeight(stripe.thickness);
    line(stripe.x, y, stripe.x, height);
    if (stripe.x > width * 1.7) {
      countOfStripesFilled++;
    }
    stripe.x += stripe.gap * 2;
  }
};

function setup() {
  createCanvas(400, 400);
  background(palette.brickEmber);
  drawVerticals();
  drawHorizontals();
}
