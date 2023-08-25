//A function logBetween(lowNum, highNum) that will print every number from lowNum to highNum, inclusive. Inclusive means that the range includes lowNum and highNum.

function logBetween1(lowNum, highNum) {
  for (let i = lowNum; i <= highNum; i += 1) {
    console.log(i);
  }
}

function logBetween2(lowNum, highNum) {
  let i = lowNum;
  while (i <= highNum) {
    console.log(i);
    i++;
  }
}
