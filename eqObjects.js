const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (object1[key] === object2[key]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
// // => true
console.log(eqObjects(shirtObject, anotherShirtObject));
// console.log(assertEqual(eqObjects(shirtObject, anotherShirtObject)), true);

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
console.log(eqObjects(shirtObject, longSleeveShirtObject));

// // console.log(eqObjects(shirtObject, longSleeveShirtObject)); // => false
// console.log(assertEqual(eqObjects(shirtObject, longSleeveShirtObject)), false);
