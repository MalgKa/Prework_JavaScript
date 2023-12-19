const cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];

const arrayWithLength = [];

cities.map(function (el) {
  arrayWithLength.push(el.length);
});

console.log(arrayWithLength);
