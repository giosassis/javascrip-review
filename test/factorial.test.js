const factorial = require("../exercises/factorial");

describe("factorial()", () => {
  it("Should return 40320", () => {
    const response = factorial(8);
    expect(response).toBe(40320);
  });
});

/*describe('Set', () => {
     decribe('Set#add()', () => { ... })
})*/