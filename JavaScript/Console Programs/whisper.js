//A function whisper that takes in a string and returns a "whispered" version of that string.
// Example : I/P -> "Hey Buddy"  O/P => "...hey buddy..."

//My BRUTEFORCE APPROACH
function whisper(str) {
  let ans = "";

  let i = 3;
  while (i--) {
    ans += ".";
  }

  //I learned here the difference b/w
  // {for in => to access the index} loop and {for of => to access the element} loop
  for (ch in str) {
    ans += str[ch];
  }
  i = 3;
  while (i--) {
    ans += ".";
  }

  return ans;
}

let whisper2 = function (str) {
  return "..." + str.toLowerCase(str) + "...";
};

console.log(whisper2("YEA! that was fun")); // => "...yea! that was fun..."
