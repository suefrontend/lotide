const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

assertArraysEqual(middle([6, 5]), []);
assertArraysEqual(middle([6, 5, 7]), [5]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle(["cat", "dog", "cow"]), ["dog"]);
assertArraysEqual(middle(["cat", "dog", "cow", "horse"]), ["dog", "cow"]);
