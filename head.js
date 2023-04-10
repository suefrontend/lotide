const head = function (arr) {
  if (arr.length === 0) return undefined;

  //   return arr.slice(0, 1); -> incorrect, slice returns an array
  return arr[0];
};

module.exports = head;
