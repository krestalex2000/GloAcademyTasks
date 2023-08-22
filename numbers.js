let num = 266219;

let arrayNumbers = String(num).split("");
let total = 1;

  for (let number of arrayNumbers) {
    total = total * number
  }

console.log(total);

total = total**3

console.log(String(total).slice(0, 2));