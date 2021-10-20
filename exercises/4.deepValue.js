function deepValue(value1, value2) {
  if (value1 === value2) {
    return true;
  } else if (value1 == null && value2 == null) {
    return false;
  } else if (typeof value1 == "object" || typeof value2 == "object") {
    return true;
  } else if (value1 == null && value2 == null) {
    return true;
  }

  return true;
}
