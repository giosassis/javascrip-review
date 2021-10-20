function flat(array) {
  return array.reduce((flat, curr) => flat.concat(curr), []);
}

console.log(flat([[1, 2, 3], [4, 5], [6]]));
