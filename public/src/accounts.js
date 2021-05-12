function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((account1, account2) =>
    account1.name.last.toLowerCase() > account2.name.last.toLowerCase() ? 1 : -1
  );
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0; //create a variable that is a number for an index of borrows
  books.forEach((book) =>
    book.borrows.forEach((borrow) => account.id === borrow.id && total++)
  );
  //take books and create a function that pulls account id and compares with borrows and incremnts total
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  //return all books checked out with author
  const borrowedBooks = books.filter((book) =>
    book.borrows.some((borrow) => !borrow.returned && borrow.id === account.id)
  );
  borrowedBooks.forEach(
    (book) =>
      (book.author = authors.find((author) => book.authorId === author.id))
  );
  //return a boolean to see if borrowed and if true then adds account id to borrowedBooks
  return borrowedBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
