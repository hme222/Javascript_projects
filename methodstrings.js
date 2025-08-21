let str = "JavaScript";

console.log(str.toUpperCase());
console.log(str.toLowerCase());

//slice()
console.log(str.slice(0, 4)); // java
console.log(str.slice(4, 10)); // script
console.log(str.slice(-1)); //
console.log(str.substring(4, 10));

console.log(str.indexOf("c"));

console.log(str.concat(" is fun!"));

let str3 = "This is a test";
let newArr = str3.split(" ");
console.log(str3);
console.log(newArr); // no space means every letter is split

//reversing a string

// console.log(str3.reverse()) - doesn't work! can't reverse a string

let reverseStr = ""; // negatives and minusing bc we are going backwards with reversing
for (i = str3.length - 1; i >= 0; i--) {
  reverseStr += str3[i]; // brackets identifying the character
}

console.log(reverseStr);

// easier way lol 

let reverseStrAgain = str3.split("").reverse().join(""); //chaining all the functions
console.log(reverseStrAgain)