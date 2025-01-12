const getTheTitles = function(books) {
  return books.map((i) => i.title);
};

const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
];

getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;
