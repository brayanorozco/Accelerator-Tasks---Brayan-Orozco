let list = [2, 6, 4, 1, 3, 7, 8, 5, 9, 10];


// ------------- Using Do/While --------------

let sortingNumbers1 = (inputArr) => {
  
  let arrLen = inputArr.length;
  let checked;
  
  do {
    checked = false;
    for (let i = 0; i < arrLen; i++) {
      if (inputArr[i] > inputArr[i + 1]) {
        let temp = inputArr[i];
        inputArr[i] = inputArr[i + 1];
        inputArr[i + 1] = temp;
        checked = true;
      }
    }
  } while (checked);
  return inputArr;
};

// ------------------ Using For loops --------------- //

let sortingNumbers2 = (numbersList) => {
  
  let listLen = list.length;
  let i, k, aux;
  
  for (k = 1; k < listLen; k++) {

    for (i = 0; i < (listLen - k); i++) {

      if (numbersList[i] > numbersList[i + 1]) {
        aux = numbersList[i];
        numbersList[i] = numbersList[i + 1];
        numbersList[i + 1] = aux;
      }
    }
  }
  return list;
}

//-------------- Using the "sort" method -------------

list.sort(function(a, b) {
  return a - b;
});


//----------- Calling functions ----------------

console.log('Using Do/While: ',sortingNumbers1(list));
console.log('Using For loop: ', sortingNumbers2(list));
console.log('Using sort: ',list);