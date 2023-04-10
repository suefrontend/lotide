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

module.exports = eqArrays;
