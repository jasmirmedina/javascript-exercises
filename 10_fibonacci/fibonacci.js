const fibonacci = function(n) {
  const n1 = parseInt(n);

  if(isNaN(n1)) return "OOPS";
  if(n1 < 0) return "OOPS";

  return n1 <= 1 ? n1 : fibonacci(n1 - 1) + fibonacci(n1 - 2);
};

fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
