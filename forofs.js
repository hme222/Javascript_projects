let names= ["Joe", "Lucy", "Bill", "Will"];

for(let i= 0; i <names.length; i++) {
    console.log(names[i])
}
// for of loop!
// shortended syntax that allows our loop to go from the beginning to the end of our array
// for ( newvariable of array)
// for (let singular of array)
console.log("\nfor of");
for(let name of names){ //this is just beginning to end, ONCE- one loop
    // gives you direct access to the element
    // you do not need an index!
    console.log(name)
}

let str= "Javascript Course"

for(let c of str){
    console.log(c)
}

//for in loop .. less common .. 
for(let i in names) {
    console.log(i)
}
//reveals the index number 
