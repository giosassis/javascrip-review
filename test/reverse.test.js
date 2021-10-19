const reverse = require("../exercises/reverse");

describe("Returns inverted array", () => {
  it("Should return C,B,A", () => {
    const response = reverse(["A", "B", "C"]);
    expect(response).toBe(["C", "B", "A"]);
  });
});
