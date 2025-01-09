const removeFromArray = function(arr, ...args) {
  return arr.filter((i) => !args.includes(i));
};

removeFromArray([1, 2, "Ho", 4, 3], 3, 4, 99);

// Do not edit below this line
module.exports = removeFromArray;
