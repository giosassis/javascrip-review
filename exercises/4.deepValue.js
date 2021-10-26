module.exports = function deepValue(value1, value2) {
  if (
    (typeof value1 !== 'object' && typeof value2 !== 'object') || 
    (value1 == null || value2 == null)
  ) {
    return value1 == value2;
  }

  const keys = Object.keys(value1);

  for (let i = 0, l = keys.length; i < l; i++) {
    const key = keys[i];

    if (!deepValue(value1[key], value2[key])) {
      return false;
    }
  }

  return true;
  // if (value1 === value2) {
  //   return true;
  // } else if (value1 == null && value2 == null) {
  //   return false;
  // } else if (typeof value1 == "object" || typeof value2 == "object") {
  //   return true;
  // } else if (value1 == null && value2 == null) {
  //   return true;
  // }

  // return true;
}
