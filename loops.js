/* 
Let's write a for loop that prints the numbers 0-50
*/

// for(let i =0; i <=50; i++) {
//     console.log(i)
// }

// let arr= ["blue", "red", "golden rod"]


// for(let i=0; i <arr.length; i++) {
//     console.log(arr[i])
// }
// array.length= dynamic coding 

let student1 = {
    username: "stu123",
    name: "Stu Pickles",
    email: "stu123@gmail.com",
    age: 20,
} 

// objectname.key - this gives us access to the value of that object's key

// console.log(student1.username);

// console.log(student1.age++)

// console.log(student1.age + 1)

// bracket notation 
let keyname = "username"
// console.log(`Username (bracket notation): ${student1["username"]}`)
//student1.username= student1["username"]       (usually .notation is used more often )

// console.log("keyname test " + student1.keyname) //results in undefined bc no brackets, and this is outside the object, not within 
// console.log("key name test (brackets):" + student1[keyname]) // this notation can then evaluation the variables inside the brackets, ex: keyname 

let student2 = {
    username: "ray123",
    name: "Raymundo Rocket",
    email: "ray123@gmail.com",
    age: 32
}

let student3 = {
    username: "hugh123",
    name: "Hugh Neutron",
    email: "hugh123@gmail.com",
    age: 24
}


let classRoom=[student1, student2, student3]

// highest age: write a function that takes in an array of students
// the function wil return the student that is the oldest 


let eldest= classRoom[0];  // this is a way to keep track of the oldest student and set this by the first student in our array, this gives us a default element to compare to 
function highestAge(classRoom){
    for(let index=0; index<classRoom.length; index++) {
        if(classRoom[index].age> eldest.age){ // this is making sure current student's age is greater than the oldest's students age, next line then sets it equal 
         eldest= classRoom[index]
        }
    }
    return eldest 
 }
// a way to access the ages and INDEX the array, using FOR loop to give us access to an index 
// an output 


//invoking the function
console.log("\nOldest Student");
console.log(highestAge(classRoom));

/* 
*/