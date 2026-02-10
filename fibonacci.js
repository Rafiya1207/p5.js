function* fibonacci(end) {
  let prevTerm = 0;
  let currentTerm = 1;
  let nextTerm = prevTerm + currentTerm;

  while (prevTerm === end) {
    yield prevTerm;
    prevTerm = currentTerm;
    currentTerm = nextTerm;
    nextTerm = prevTerm + currentTerm;
  }
}

let fibonacciGenerator;
let angle = 0;

function setup() {
  createCanvas(400, 400);
  background(255);
  angleMode(DEGREES);
  fibonacciGenerator = fibonacci(width);
}

function draw() {
  translate(width / 2, height / 2);
  rotate(angle);

  const fibonacci = fibonacciGenerator.next();

  if (fibonacci.done) {
    noLoop();
    return;
  }

  circle(0, fibonacci.value, 5);
  angle += 45;
}
