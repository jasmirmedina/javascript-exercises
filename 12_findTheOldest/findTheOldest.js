const findTheOldest = function(people) {
  const actualYear = new Date().getFullYear();

  const ages = [];

  people.forEach((element) => {
    if(element.hasOwnProperty("yearOfDeath")) {
      ages.push(element.yearOfDeath - element.yearOfBirth);
    } else {
      ages.push(actualYear - element.yearOfBirth);
    }
  });

  return people[ages.indexOf(Math.max(...ages))];
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
