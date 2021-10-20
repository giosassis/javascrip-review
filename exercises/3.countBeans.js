module.exports = function countChar(str, chr) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == chr) {
      count += 1;
    }
  }
  return count;
};
