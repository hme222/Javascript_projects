/* write a program where the user inputs a string 
then, repeat that string until the string's length
is greater than or equal to 10 (characters)

abc 

abcabc

abcabcabc

abcabcabcabc

to modify a string you have to do example+="!" to then concatonate to example!

*/ 

const prompt= require("prompt-sync")({sigint: true})

let str= prompt("Enter a word: ");

// for(promptWord=""; promptWord<str.length; promptWord++ )
//     if(Number(promptWord)>10 )

// let newStr = ""; /// let is not right here bc it's more complex for no reason 
// for(newStr = ""; newStr.length < 10; newStr += str ){
//     console.log(newStr)
// }
// console.log(newStr)


let newstr= ""; 
while(newstr.length<10){
    newstr+=str 
    console.log(newstr)
} 
/// String builder problem, added consolelog inside to build the string 




