const sumAll = function(start, end) {
  if(
    start < 0 || end < 0 ||
    !Number.isInteger(start) || !Number.isInteger(end)
  ) return "ERROR";

  const min = Math.min(...[start, end]);
  const max = Math.max(...[start, end]);

  let num = 0;

  for(let i = min; i <= max; i++) {
    num += i;
  }

  return num;
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
