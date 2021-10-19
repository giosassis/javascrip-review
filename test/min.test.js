const min = require("../exercises/min");

describe("Must return the smallest number", () => {
  it("Should return 60", () => {
    const response = min(92, 60);
    expect(response).toBe(60);
  });
});
