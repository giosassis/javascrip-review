for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0) console.log("Fizz");
  if (i % 5 == 0) console.log("Buzz");
  if (i % 5 && i % 3 == 0) console.log("FizzBuzz");
  if (i % 5 && i % 3 != 0) console.log(i);
}