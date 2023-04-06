const eqObjects = function (object1, object2) {
  //   const keys1 = Object.keys(object1);
  //   const keys2 = Object.keys(object2);

  //   if (!eqArrays(keys1, keys2)) {
  //     return false;
  //   }

  //   for (const key of keys1) {
  //     if (Array.isArray(object1[key])) {
  //       if (!eqArrays(object1[key], object2[key])) {
  //         return false;
  //       }
  //     } else {
  //       if (object1[key] !== object2[key]) {
  //         return false;
  //       }
  //     }
  //   }
  //   return true;
  return object1 === object2;
};

const assertObjectsEqual = function (actual, expected) {
  // Implement me!
  const inspect = require("util").inspect; // <= add this line

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${expected}`);
  }
};

console.log(
  assertObjectsEqual(eqObjects({ a: "1", b: 2 }, { b: 2, a: "1" })),
  true
);
