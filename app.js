let numbers = [];
while (numbers.length < 10) {
  let number = parseInt(prompt("Inserisci un numero:"));
  if (number % 2 !== 0 && !isNaN(number)) {
    numbers.push(number);
  }
}

for (let number of numbers) {
  console.log(number);
}


let people = ["Grande Puffo", "Puffeta", "Puffo Quattrocchi", "Tontolone", "Puffo Inventore", "Puffo Forzuto", "Puffo Golosone", "Puffo Cuoco", "Puffo Vanitoso", "Puffo Brontolone"];

people.sort(function() {
  return 0.5 - Math.random();
});

console.log(people);