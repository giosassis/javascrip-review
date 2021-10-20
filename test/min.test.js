const min = require("../exercises/3.min");

describe("min()", () => {
  it("Should return 60", () => {
    const response = min(92, 60);
    expect(response).toBe(60);
  });
});
