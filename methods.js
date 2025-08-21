let arr1= ["Dog", "Cat", "Fox", "Deer", "Bird"] 
// arr1.push("Fish") // some examples of adding and removing 
// console.log(arr1)
// arr1.push("lizard", "iguana")
// // console.log(arr1)
// // arr1.pop()
// // console.log(arr1)
// arr1.unshift("Lizard")
// console.log(arr1)

// arr1.shift();
// console.log(arr1)
// console.log("Normal")
// console.log(arr1)
// arr1.reverse() // modifies the original array
// console.log("Reversed: ")
// console.log(arr1)

// console.log(arr1[arr1.length - 1]) // how to find last element in an array 

// // indexOf(item) 

// console.log("\nindexOf")
// console.log(arr1.indexOf("Fox"));
// console.log(arr1.includes("Cat")) // boolean- true or false 

// .splice(index) splice will start at the index specified and then delete all items from that point on
// console.log(arr1)
// arr1.splice(3)
// console.log(arr1)

/* 
do while- ALWAYS tries to run code in do section  at least ONCE {} (NOT often used)
do { 
    xyz 
} while(condition)

*/
// .splice(index, amounttodelete)
// console.log(arr1)
// arr1.splice(0,2)
console.log(arr1)

console.log(arr1.slice(1))

let arr2= ["blue", "green"]
let arr3= ["red", "orange", "magenta"]

console.log(arr2.concat(arr3))
console.log(arr2) 


let arr4= ["This", "is", "a", "sentence"]

console.log(arr4)

let joinedarr= arr4.join(" ") // the space between adds space 
console.log(joinedarr)