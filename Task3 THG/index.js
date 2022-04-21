arrayWords = ["Hello", "World", "Frame"];

const selectingLongestWord = () => {

  arrayWords.unshift('The');

  let wordsFromArray = [];

  // Length of words stored
  arrayWords.forEach(el => wordsFromArray.push(el.length));

  // Saving the longest word
  const max = wordsFromArray.reduce((a, b) => Math.max(a, b));
  return max;
}

const buildingFrame = () => {

  let longestWord = selectingLongestWord();

  //Drawing top line
  let lineTopButtom = '*'.repeat(longestWord + 4) + '\n';

  let drawing = lineTopButtom;
  //Inserting words
  for (let i = 0; i < arrayWords.length; i++) {

    drawing += '* ' + arrayWords[i] + ' '.repeat(longestWord - arrayWords[i].length + 1) + '*\n';

  };
  //Drawing buttom line
  drawing += lineTopButtom;

  console.log(drawing);
}

buildingFrame();