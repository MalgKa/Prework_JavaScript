const numbers = [4, -5, 0, 2, -67, 8, 10, -34];

const newArr = numbers.filter(function (el) {
  return el < 0;
});

console.log(newArr);
