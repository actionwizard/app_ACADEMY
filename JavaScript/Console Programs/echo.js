//A function echo that takes in a string and console.logs that string "echo-ized". Analyze the example test cases to see the expected "echo-ized" output of the function.

function echo(string) {
  let temp = string;

  return temp.toUpperCase() + "..." + string + "..." + temp.toLowerCase();
}

console.log(echo("Mom!")); // => prints "MOM! ... Mom! ... mom!"
console.log(echo("hey")); // => prints "HEY ... hey ... hey"
console.log(echo("JUMp")); // => prints "JUMP ... JUMp ... jump"
