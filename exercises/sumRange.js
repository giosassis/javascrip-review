function range(start, end) {
  let result = [];

  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
}

function sum(arr) {
  let total = 0;
  for (let i = 0; i <= arr.length; i++) {
    total += arr[i];
  }
  return total;
}
console.log(range(1, 100))