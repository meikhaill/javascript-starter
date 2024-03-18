

function shelfBook(book, shelf) {
  if(shelf.length <= 2) {
    return shelf.push(book);
  } else {
    return false
  }
}

function unshelfBook(book, shelf) {
  indx = shelf.indexOf(book)
  if(shelf.includes(book)) {
    
  }
}

module.exports = {
  shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
};