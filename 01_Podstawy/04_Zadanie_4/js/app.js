let min = 1;
let max = 10;

let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
console.log(randomNumber);

let answer = prompt("wpisz liczbę od 1 do 10");

console.log(answer);

if (randomNumber == answer) {
  console.log("brawo");
} else {
  console.log("Spróbuj jeszcze raz :(");
}
