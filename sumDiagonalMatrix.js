// Given a 2D array, (square which means the same number on each side) 
// Objective: Given a square matrix, find the sum of the diagonals of the matrix. 

    //[[1,2,3]
    //[2,5,6]
    //[7,8,9]

// design code to get the top left to bottom right & bottom left to top right and then find the sum of those (ex: 1+5+9 then add 7+5+3 to find total)
// function sumDiagonalMatrix(matrix) {
// return 
// }
// console.log(sumDiagonalMatrix(matrix)) // should return 15 & 15 

// HINT- 2 MAJOR solutions, 1st one is more approachable but less efficient, and uses a nested for loop, second one is less approachable but only uses one for loop
/* 
Step 0-3
Assumptions: whole numbers, matrix will always be square, matrix size may change, elements will always be numerical

step 2: 
1. letters will be read from left to right 
    counter will be (1-3)
2. Loop will have 3 variables 
    2 sums are needed 

step 3: 
Loop from 1-3. 
    create another loop that adds the sum(s) of [1,0], [2,2] [0,3] & [003], [2,2], [100] numbers 

    NOTES:  we read the loop left to right, we have to go through all        elements, then we can do the next function 

    also during multidimensional arrays, we can keep track of both positions, outer array and current position of inner array. the two numbers represent the inner and outer arrays ex: 0,0 for the very first spot

    we want to add all unidirectional values.
    --> for one diagonal, both iterative indices should be equal
    --> for the other diagnonal, the sum of both iterative indices should be one less than the width of our matrix.
    'i + j == n - 1'

    we want to design conditions to check for diagonal values
    both rules need to be checked independently of one another, since we would have values that are on no diagonals, values that are on one diagonal, or at least one value that's on both diagonals 

    Approach: 
    function get-sum-of-diagonals-in-matrix(matrix) 
        create two placeholders for first and second diagonal sums 
        loop over each array within our matrix
        loop over each value within the current array 
            check if current value exists in first diagonal (positions are equal)
                if it does, add value to first diagonal sum 
            
            check if current value exists in second diagonal (sum of positions is one less than the matrix's width) 
                if it does, add value to the second diagonal sum  
                
                
    return both diagonal sums 


*/
let matrix= [ 
    [1 ,2 ,3],
    [4 ,5, 6],
    [7 ,8, 9],
]


// function sumDiagonalMatrix(matrix) { 
//     const N= matrix.length
//     let firstDiagonalSum= 0
//     let secondDiagonalSum= 0 
//     for (let outerPosition= 0; outerPosition <N; outerPosition++) {
//         for (let innerPosition = 0; innerPosition < N; innerPosition++) {
//             if (outerPosition ==innerPosition) {
//                 firstDiagonalSum += matrix[outerPosition][innerPosition] //this represents outerposition/innerposition within array  ex: [2,2]= 5 
//             }
//             if(outerPosition + innerPosition == N-1) {
//                 secondDiagonalSum += matrix[outerposition][innerPosition] 
//             }
//             }
//      }  }
        console.log(`First Diagonal Sum: ${firstDiagonalSum}`)
        console.log(`Second Diagonal Sum ${secondDiagonalSum}`) 

        
    //     return console.log(sumDiagonalMatrix)
    // }
    // for matrix( firstplace || secondplace, thirdplace )

    // return 

/*  
Second way to do the SAME problem 
*/

function efficientSumDiagonalMatrix(matrix) {
    const N = matrix.length  // size of the total matrix
    let firstDiagonalSum = 0, secondDiagonalSum = 0 // starting point for the loop
    for (let position = 0; position <N; position ++) { // 2 rules for the loop- independent actions
        firstDiagonalSum += matrix[position][position] //the sum is equivalent to indices
        secondDiagonalSum += matrix[position][N - position -1] 
    } console.log(`First(Efficient) Diagonal Sum: ${firstDiagonalSum}`)
     console.log(`Second (Efficient) Diagonal Sum: ${secondDiagonalSum}`)
}

/*  
Pseudocode and steps 

definitions of the coordinates are listed BOTH as position within matrix 

function of the actual sum of the matrix
            create a rule surrounding the length of matrix to keep variables accurate 
        set the diagonals= 0 for starting
    begin first loop with generic position constraints
            execute first diagonalsum to be equivalent to itself
            then execute second to be equivalent to n- current digit -1
    then recieve back sums 

    first loop  i=j 
    second loop i + j = N - 1 
        "j"= n-1-"i"
        "i" = p
        [p]="i" , [n -1 -p] ="j" 
no matter what, above 0 
*/





