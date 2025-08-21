// Write a program that prompts the user for a number 
// and then repeatedly doubles that number until it is
// equal or greater than 100 

// Assume the # that the user inputs will be A) always be positive 
// B) always be less than 100 

// if the user enters:23 then 46 output, 92, 184 then stop

const prompt= require("prompt-sync")({sigint: true})

let numberLessthan100= Number(prompt("Enter a number from 1-100 to double: "));

while(numberLessthan100 <=100) {
    console.log(numberLessthan100)
    numberLessthan100*=2 
}
console.log(`Doubled numbers: ${numberLessthan100}`)

