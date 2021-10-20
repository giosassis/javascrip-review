module.exports = function reverseArray(arr) {
  let result = [];
  for(let i = arr.length - 1; i >= 0; i--) {
    const value = arr[i];
    result.push(value);
  }

  return result;
}
