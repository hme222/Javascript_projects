/* Prime Number finder 
Objective: design a function (`primenumberfinder()`) that takes in a number from the user & then checks to see if it's a prime #. Return T/F for results. 
Set a prime rule to determine how to find () 
A prime number is any number that only has two dividing factors: 1 and itself (e.g. 1 and itself)

Since 1 is a prime number, we start rule at 2. Check if number is divisible by 2 using the modulus operator (%). 

If we haven't found another factor yet, we keep incrementing upwards. Once one is found, break out of a loop since we have a non-prime number. If we get to the actual numbers' value with no factors detected, then it's prime. 
*/

function primeNumberFinder(number) {
    // by default assume the number is prime 
    let isPrime= true 
    // start counting factors from `2` up to `number -1`
    let currentPossibleFactor= 2
    // while our current factor is less than the number...
    while (currentPossibleFactor < number) {
    //  check if the number is divisible by the current factor
        if(number % currentPossibleFactor == 0) {
 //      if it is, we know we don't have a prime number 
//      say the number ISN'T prime and immediately breakout of the loop 
         isPrime= false
         break
        }
//      until then, keep incrementing the factor
        currentPossibleFactor++
    }
    // Return the flag for whether or not the number's prime
    return isPrime
}

console.log(primeNumberFinder(5))
console.log(primeNumberFinder(8))
console.log(primeNumberFinder(81))
console.log(primeNumberFinder(97))
console.log(primeNumberFinder(1000))

//
// function sayHiTo(name) {
//     return `Hi, ${name}!`
// }

// let name = "Kash"
// console.log(sayHiTo(name))