function primitiveMultiply(a, b) {
  try {
    if (Math.random() < 0.2) return a * b;
    throw new Error("Multiplication Failure");
  } catch (error) {
    console.error(error);
  }
}
