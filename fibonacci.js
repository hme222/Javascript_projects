/* Fibonacci sequence is a number sequence that starts at the numbers 0 & 1.
From there, every next number is the sum of the previous two numbers in the sequence. 

SEQ: 0, 1 ,1 ,2 ,3 ,5 ,8 , 13, 21, 34, 55, 89..
n:   0, 1, 2, 3 ,4 ,5, 6,  7,   8,  9, 10, 11

construct a function that returns the number in the sequence at the given position. 

INPUT: "n"
OUTPUT: `fib{n} => #` 

for the first two values in the sequence, we can do `n ==Fi(n)`
*/ 

const FibonacciRecursive = position => {
    if(position <= 1) {
        return position 
    }
    return FibonacciRecursive(position - 1) + FibonacciRecursive(position -2)
}

const fibonacciI = position => {
    let firstNum = 0, secondNum= 1, temporary 
    
    while(position >= 0) {
        temporary = secondNum
        secondNum = secondNum + firstNum 
        firstNum = temporary
        position--
    }

    return firstNum
} 

console.log(fibonacciI(8))