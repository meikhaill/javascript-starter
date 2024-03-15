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


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}