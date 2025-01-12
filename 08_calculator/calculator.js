const add = function(n1, n2) {
  return n1 + n2;
};

const subtract = function(n1, n2) {
  return n1 - n2;
};

const sum = function(arr) {
	return arr.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, curr) => acc * curr);
};

const power = function(n1, n2) {
  return n1 ** n2;
};

const factorial = function(n) {
  let current = 1;

  for(let i = n; i > 0; i--) current *= i;

  return current;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
