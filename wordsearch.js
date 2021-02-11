// Pair Programmed with Judit Méndez

const transpose = function(matrix) {
  let array = [];
  for (let row = 0; row < matrix[0].length; row++) {
    let rowArray = [];
    for (let column = 0; column < matrix.length; column++) {
      rowArray.push(matrix[column][row]);
    }
    array.push(rowArray);
  }
  return array;
};


const wordSearch = (letters, word) => {
  if (letters.length !== 0) {
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (let line of horizontalJoin) {
      if (line.includes(word)) {
        return true;
      }
    }
    const transposedLetters = transpose(letters);
    const joinedLetters = transposedLetters.map(ls => ls.join(''));
    for (let row of joinedLetters) {
      if (row.includes(word)) {
        return true;
      }
    }
  }
  return false;
};

module.exports = wordSearch;