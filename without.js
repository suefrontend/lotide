const without = function(source, itemsToRemove) {
  let result;

  for (let i = 0; i < source.length; i++) {
    if (source.includes(itemsToRemove[i])) {
      result = source.filter((item) => item !== itemsToRemove[i]);
    }
  }

  return result;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(["dog", "cat", "mouse"], ["mouse"])); // => ["dog", "cat"]
console.log(without(["1", " ", "3"], ["3"])); // => [ '1', ' ' ]

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  let len = arr1.length > arr2.length ? arr1.length : arr2.length;

  for (let i = 0; i < len; i++) {
    if (arr1[i] === arr2[i]) {
      continue;
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
