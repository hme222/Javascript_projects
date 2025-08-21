/*
Give the User the ability to input as many numbers as they want 
when they enter `0`, stop asking the user to input numbers 
and return the sum of all previously inputted numbers 

Enter some numbers: 
5
17
22
2
0 

Final total: 24 

*/

const prompt= require("prompt-sync")({sigint: true})

let num=Number(prompt("Enter some numbers(enter 0 to stop): "));

let sum= num; 

while(num !== 0){
    num= Number(prompt("> ")) //this is whats running, as new nums come in, we update them 
    sum= num + sum // or sum+=num;  breaking down the addition to create the new number 
}
// while loops- while true, while DO 
console.log(`Total: ${sum}`);
