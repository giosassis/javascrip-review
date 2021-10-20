const isEven = require("../exercises/3.recursive");

describe("Shows if numer is odd or even", () => {
  it("Should return true", () => {
    const response = isEven(60);
    expect(response).toBe(true);
  });
});

describe("Shows if numer is odd or even", () => {
    it("Should return false", () => {
      const response = isEven(-15);
      expect(response).toBe(false);
    });
  });
  
