/*const square = function(x) {
    return x*x
}*/

/*const hummus = function (factor) {
  const ingredients = function (amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredients(1, "can", "chickpeas");
  ingredients(0.25, "cup", "tahini");
  ingredients(0.25, "cup", "lemon juice");
  ingredients(1, "clove", "garlic");
  ingredients(2, "tablespoon", "olive oil");
  ingredients(0.5, "teaspoon", "cumin");
};*/

//arrow function
/*const power = (base, exponent) => {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base + i;
    }

    return result
}

console.log(power(2,8))*/

function minus(a, b) {
  if (b === undefined) {
    return -a;
  } else {
    return a - b;
  }
}
console.log(minus(10));

//Exemplos de funções práticas:

function multiplier(factor) {
  return (number) => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));

function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}
function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}
