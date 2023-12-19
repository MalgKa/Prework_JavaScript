const years = [1995, 1856, 2014, 1987];

const newD = new Date().getFullYear();

const newArr = years.map((el) => newD - el);
console.log(newArr);
