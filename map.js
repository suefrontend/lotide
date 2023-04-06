const eqArrays = function(arr1, arr2) {
  let len = arr1.length > arr2.length ? arr1.length : arr2.length;

  for (let i = 0; i < len; i++) {
    if (arr1[i] === arr2[i]) {
      continue;
    } else if (arr1[i] !== arr2[i]) {
      return;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const nums = [1, 3, 5];

assertArraysEqual(
  map(words, (word) => word[0]),
  ["g", "c", "t", "m", "t"]
); // => should PASS
assertArraysEqual(
  map(nums, (num) => num + 1),
  [2, 4, 6]
); // => should PASS
assertArraysEqual(
  map(words, (word) => word.toUpperCase()),
  ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]
); // => should PASS
