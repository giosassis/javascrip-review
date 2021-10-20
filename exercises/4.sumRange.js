function range(start, end) {
  let result = [];

  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
} // Store values ​​in array

function sum(num) {
  return num.reduce((total, current) => total + current, 0);
} // Return sum of values
