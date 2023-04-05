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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(arr) {
  if (arr.length <= 2) return [];

  for (let i = 0; i < arr.length; i++) {
    if (arr.length % 2 === 0) {
      return [arr[arr.length / 2 - 1], arr[arr.length / 2]];
    } else {
      return [arr[Math.floor(arr.length / 2)]];
    }
  }
};

assertArraysEqual(middle([6, 5]), []);
assertArraysEqual(middle([6, 5, 7]), [5]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle(["cat", "dog", "cow"]), ["dog"]);
assertArraysEqual(middle(["cat", "dog", "cow", "horse"]), ["dog", "cow"]);
