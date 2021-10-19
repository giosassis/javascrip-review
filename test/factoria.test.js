const factorial = require("../exercises/factorial")

describe("Return the number 8 factorial", () => {
    it("Should return 40320", () => {
      const response = factorial(8);
      expect(response).toBe(40320);
    });
  });