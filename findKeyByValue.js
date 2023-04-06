const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (shows, title) {
  for (const genre in shows) {
    if (shows[genre] === title) {
      return genre;
    } else {
      return undefined;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

// findKeyByValue(bestTVShowsByGenre);

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "sports");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
