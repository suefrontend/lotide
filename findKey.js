const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  const keys = Object.keys(object);

  for (let i = 0; i < keys.length; i++) {
    if (callback(object[keys[i]])) {
      return keys[i];
    }
  }
};

assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  ),
  "noma"
);

assertEqual(
  findKey(
    {
      dog: { color: "black", age: 1 },
      cat: { color: "white", age: 3 },
      rabbit: { color: "gray", age: 2 },
    },
    (x) => x.color === "black"
  ),
  "dog"
);

assertEqual(
  findKey(
    {
      1: { studentId: 123 },
      2: { studentId: 456 },
      3: { studentId: 789 },
    },
    (x) => x.studentId === 456
  ),
  "2"
);
