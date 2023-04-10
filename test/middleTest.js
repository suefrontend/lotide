const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("returns [] for [6,5]", () => {
    assert.deepEqual(middle([6, 5]), []);
  });
  it("returns [] for [6,5]", () => {
    assert.deepEqual(middle([6, 5, 7]), [5]);
  });
  it("returns [] for [6,5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns [] for [6,5]", () => {
    assert.deepEqual(middle(["cat", "dog", "cow"]), ["dog"]);
  });
  it("returns [] for [6,5]", () => {
    assert.deepEqual(middle(["cat", "dog", "cow", "horse"]), ["dog", "cow"]);
  });
});
