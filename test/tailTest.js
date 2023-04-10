const assert = require("chai").assert;
const tail = require("../tail");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it

describe("#head", () => {
  it("returns 3 for words.length", () => {
    assert.strictEqual(words.length, 3);
  });
});
