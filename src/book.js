function createTitle(title) {
  title = 'The ' + title
  return title
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns
  };
};


function saveReview(review, arr) {
  if (!arr.includes(review)) {
  arr.push(review)
  }
};

function calculatePageCount(title) {
  count = title.length * 20
  return count
}

function writeBook(title, mainCharacter, genre) {
  pageCount = calculatePageCount(title)
  return {
   title: title,
   mainCharacter: mainCharacter,
   pageCount: pageCount,
   genre: genre
  };
}

function editBook(book) {
  book.pageCount = book.pageCount * 0.75
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}