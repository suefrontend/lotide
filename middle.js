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

module.exports = middle;
