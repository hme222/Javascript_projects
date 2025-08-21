/* 

INPUT: `data`
OUTPUT: 
{ 
    `d`: 1
    `a`: 2
    `t`: 1
}

character counter algorithm, tallied up new and existing information 
looped over every character of our input word/phrase. 
    Ensure it's a letter.
    lowercase the letter. 
    if the letter exists in our frequency-tracking object (table)
        then we increment the letter's frequency 
    if it DOESN'T, 
        then we add it to the object/table and set its frequency to (1). 
    return the object or table 

ADDENDUM/CONSTRAINT: we MUST use aggregate functions (at least one!)
*/

let message = "Hello, World!"
console.log(message.split("")) 
// comes back with h e l l o array

const characterCounter= message => {
 return message.split("").reduce((frequencies, character)=> {
    const lowerChar = character.toLowerCase()
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    if(alphabet.includes(lowerChar)) {
        if(frequencies[lowerChar]) {
            frequencies[lowerChar] += 1
        } else {
            frequencies[lowerChar] = 1 
        }
     }
     return frequencies 
},{})}
// ^ {} empty braces are marking what we "start" out with 

console.log(characterCounter("Hillary was here lol"))