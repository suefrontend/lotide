const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function (arr1, arr2) {
  let len = arr1.length > arr2.length ? arr1.length : arr2.length;

  for (let i = 0; i < len; i++) {
    // if (arr1[i] === arr2[i]) {
    if (arr2.includes(arr1[i])) {
      continue;
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (!eqArrays(keys1, keys2)) {
    return false;
  }

  for (const key of keys1) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};

// console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject));
console.log(
  assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject))
); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
// console.log(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject)); // => false
console.log(
  assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject))
); // => false
