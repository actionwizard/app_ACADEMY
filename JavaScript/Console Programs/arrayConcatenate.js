//A function logBetween(lowNum, highNum) that will print every number from lowNum to highNum, inclusive. Inclusive means that the range includes lowNum and highNum.

function combineArray(array1, array2) {
  let newArray = array1.concat(array2);
  return newArray;
}

console.log(combineArray([1, 2], [3, 4])); // => [1, 2, 3, 4]
console.log(combineArray([17, 5], [6, 7])); // => [17, 5, 6, 7]
