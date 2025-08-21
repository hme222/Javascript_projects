/* 
Write a function threeshot that randomly generates a number between 1-100. 

Give the user 3 chances to guess that number

if the user guesses right, tell them

if guess is too high or low, convey this to the user

function will take in the user's guess as an arguement

*/

const prompt = require("prompt-sync")({ sigint: true });

let num = Number(prompt("Enter your guess:"));

function threeShot(guess) {
  //Math.random() gives a decimal between 0-1
  let secretNumber = Math.floor(Math.random() * 100) + 1;
  console.log(secretNumber);
  console.log(`Your guess: ${guess}`);
  let numberOfGuesses = 1; /// prompt starts the guesses
  while (guess !== secretNumber && numberOfGuesses < 3) {
    if (guess < secretNumber) {
      console.log("Guess is too low !");
    } else if (guess > secretNumber) {
      console.log("Guess is too high !");
    }
    // if(numberOfGuesses===3){   /// this is a bit more code vs. adding it uptop
    //     break; //exits the loop
    // }
    guess = Number(prompt("Enter another guess: ")); // this is re-assigning guess to enable the loop to keep running
    numberOfGuesses++;
  }
  if (guess === secretNumber) {
    console.log("You got it right! yay!");
  } else {
    console.log("you got it wrong!");
  }
}

threeShot(num);
