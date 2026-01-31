// fixed bin width
const binWidth = 20;

const isBetween = (start, end, element) => element >= start && element <= end;

const createBin = (start, end, data) => {
  const bin = [];

  while (isBetween(start, end, data[0])) {
    bin.push(data.shift());
  }
  return bin;
};

const tallyBinFrequency = (start, end, data) => {
  let count = 0;
  while (isBetween(start, end, data[0])) {
    count++;
    data.shift();
  }
  return count;
};

const createBins = (data, binWidth = 10) => {
  const sortedData = [...data].sort((a, b) => a - b);
  const maxValue = Math.max(...data) - 10;
  const minValue = Math.min(...data);

  const bins = [];

  for (
    let binStart = minValue - (minValue % 10);
    binStart <= maxValue + (maxValue % 10);
    binStart += binWidth
  ) {
    const binEnd = binStart + binWidth;
    const frequency = tallyBinFrequency(binStart, binEnd, sortedData);
    bins.push({ binStart, binEnd, frequency });
  }
  return bins;
};

let numericData;

const randomData = (floor, random, dataSize, start, end) => {
  const data = [];

  for (let index = 0; index < dataSize; index++) {
    const r = random(1);

    if (r < 0.6) {
      
    }
  }
  return data;
};

function setup() {
  createCanvas(400, 400);
  background(220);
  const dataSize = 2000;
  const lowerBoundary = 0;
  const upperBoundary = 400;
  numericData = randomData(
    floor,
    random,
    dataSize,
    lowerBoundary,
    upperBoundary,
  );
}

function draw() {
  const bins = createBins(numericData, binWidth);

  bins.forEach(({ binStart, frequency }) => {
    rect(binStart, height - frequency, binWidth, frequency);
  });
}
