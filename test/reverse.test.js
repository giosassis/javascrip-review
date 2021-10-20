const reverse = require("../exercises/4.reverse");

describe("Returns inverted array", () => {
  it("Should return C,B,A", () => {
    const response = reverse(["A", "B", "C"]);
    console.log(response)
    expect(response).toStrictEqual(["C", "B", "A"]);
  });
});
