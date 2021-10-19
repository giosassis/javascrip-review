const { it } = require("@jest/globals");
const countChar = require("../exercises/countBeans");

describe("Count how many B", () => {
  it("Should return one", () => {
    const response = countChar("Banana", "B");
    expect(response).toBe(1);
  });
});

describe("Count how many A", () => {
  it("Should return three", () => {
    const response = countChar("Banana", "a");
    expect(response).toBe(3);
  });
});

describe("Count how many N", () => {
  it("Should return two", () => {
    const response = countChar("Banana", "n");
    expect(response).toBe(2);
  });
});
