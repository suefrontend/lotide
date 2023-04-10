const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it("returns true for eqArrays([1, 2, 3], [1, 2, 3])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns false for eqArrays([1, 2, 3], [1, 2, 3, 4])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
  });
});
