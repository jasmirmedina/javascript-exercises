const palindromes = function (str) {
  const alpha = "abcdefghijklmnopqrstuvwxyz0123456789";

  const cleanStr = str
    .toLowerCase()
    .split("")
    .filter((i) => alpha.includes(i))
    .join("");

  const reversedStr = cleanStr.split("").reverse().join("");

  return cleanStr === reversedStr;
};

palindromes("racecar");

// Do not edit below this line
module.exports = palindromes;
