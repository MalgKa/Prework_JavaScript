const numbers = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9];

const newArray = numbers.sort(function (a, b) {
  return b - a;
});

console.log(newArray[1]);
