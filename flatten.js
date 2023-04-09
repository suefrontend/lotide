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

const flatten = function(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const currentItem = arr[i];

    if (Array.isArray(currentItem)) {
      for (const num of currentItem) {
        result.push(num);
      }
    } else {
      result.push(currentItem);
    }
  }

  return result;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, [5, 6], 4, [3]])); // => [1, 2, 3, 4, 5, 6]

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => should PASS
assertArraysEqual(flatten([1, 2, [5, 6], 4, [3]]), [1, 2, 5, 6, 4, 3]); // => should PASS
