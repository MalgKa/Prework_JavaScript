const numbers = [4, 4, 1, 2, 5, 40];

const sum = numbers.reduce(function (acc, currentValue) {
  return acc + currentValue;
}, 0);

const avg = sum / numbers.length;
console.log(avg);
