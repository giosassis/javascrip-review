function fizzBuzz(number) {
  let result = [];

  for (let i = 1; i <= number; i++) {
    let value = "";
    if (i % 3 == 0) {
      value += "Fizz";
    } else if (i % 5 == 0) {
      value += "Buzz";
    } else if (i % 5 && i % 3 == 0) {
      value += "FizzBuzz";
    } else if (value.length == 0) {
      value = i;
    }

    result.push(value);
  }

  return result;
}

console.log(fizzBuzz(50).join(","));
