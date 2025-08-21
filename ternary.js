let person = {
    name: "Joe",
    age: 30,
    isAdmin: true,
}

let access = "";
//if a person is admin, they have access, if they aren't then say "access denied"

// if(person.isAdmin === true){
//     access="You have access!" 
// } else {
//     access= "Access denied!"
// }


// ternary Operator !!!
//variable= condition ? TRUE(operation): FALSE (operation)
access= person.isAdmin ? "You have access!" : "Access Denied";
console.log(access)




