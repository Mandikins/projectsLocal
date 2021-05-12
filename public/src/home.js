function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let acc = 0;
  for (let i = 0; i < books.length; i++) {
    const bookBorrowed = books[i].borrows; //creat a variable that incremtns tru books and borrows array
    const bookReturned = bookBorrowed[0].returned; //create a variable that gives and arrary or books return
    if (bookReturned === false) {
      //because if borrowed then it would be true, false meants it is in stock
      acc++;
    }
  }
  return acc;
}

function _sortByValues(obj) {
  const keys = Object.keys(obj);
  return keys.sort((keyA, keyB) => {
    if (obj[keyA] > obj[keyB]) {
      return -1;
    } else if (obj[keyA] > obj[keyB]) {
      return 1;
    } else {
      return 0;
    }
  });
}

function getMostCommonGenres(books) {
  const count = books.reduce((acc, { genre }) => {
    if (acc[genre]) {
      acc[genre] += 1;
    } else {
      acc[genre] = 1;
    }
    return acc;
  }, {});
  const sorted = _sortByValues(count);
  return sorted.map((name) => ({ name, count: count[name] })).slice(0, 5);
}

//reduce objects in function, store genre and count

function getMostPopularBooks(books) {
  const mappedBooks = books.map((book) => {
    return { name: book.title, count: book.borrows.length };
  });
  return mappedBooks
    .sort((book1, book2) => book2.count - book1.count)
    .slice(0, 5);
}

function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}
// const {findAuthorById} = require("./books.js")
//Tried to use but didnt work
function getMostPopularAuthors(books, authors) {
  const mappedBooks = books.map((book) => {
    const {
      name: { first, last },
    } = findAuthorById(authors, book.authorId);
    return { name: `${first} ${last}`, count: book.borrows.length };
  });
  return mappedBooks
    .sort((book1, book2) => book2.count - book1.count)
    .slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
