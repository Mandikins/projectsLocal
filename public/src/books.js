function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const borrowedBooks = books.filter(
    (book) => book.borrows[0].returned === false
  ); //accesing book borrow array and comparing to objs return val
  const returnedBooks = books.filter(
    (book) => book.borrows[0].returned === true
  );
  const booksByStatus = [borrowedBooks, returnedBooks]; // comma to seperate the arrays
  return booksByStatus;
}

function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}
// const { findAccountById } = require("./accounts.js")
//tried but wouldnt work
function getBorrowersForBook(book, accounts) {
  let result = [];
  for (let idx in book.borrows) {
    //console.log(idx);
    const account = findAccountById(accounts, book.borrows[idx].id);
    if (result.length < 10) {
      result.push({ ...account, returned: book.borrows[idx].returned });
    }
  }
  return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
