const palette = {
  pastelPink: "#FEBCC6AF",
  cottonCandy: "#FD9D9C87",
  seashell: "#f9eae3ff",
};

const sett = [
  {
    x: -130,
    y: -130,
    colour: palette.pastelPink,
    gap: 120,
    thickness: 5,
  },
  {
    x: -120,
    y: -120,
    colour: palette.cottonCandy,
    gap: 120,
    thickness: 5,
  },
  {
    x: -60,
    y: -60,
    colour: palette.cottonCandy,
    gap: 120,
    thickness: 30,
  },
  {
    x: 0,
    y: 0,
    colour: palette.pastelPink,
    gap: 120,
    thickness: 60,
  },
  {
    x: 60,
    y: 60,
    colour: palette.cottonCandy,
    gap: 120,
    thickness: 30,
  },
  {
    x: 130,
    y: 130,
    colour: palette.pastelPink,
    gap: 120,
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
  createCanvas(600, 600);
  background(palette.seashell);
  drawVerticals();
  drawHorizontals();
}
