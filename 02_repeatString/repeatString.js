const repeatString = function(str, n) {
  if (n < 0) return "ERROR";

  let repeatedStr = "";

  while(n) {
    repeatedStr += str;

    n--;
  }

  return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
