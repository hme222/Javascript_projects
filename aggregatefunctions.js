/* 
when going through data, we want to not actually manipulate the data
we iterate over it.. machine to designate 
*/ 

let myNumbers = [1,2,3]

for (let position= 0; position <myNumbers.length; position++) {
    console.log(myNumbers[position])
}

/* 
 MAP transforms data without manipulating it's shape
*/

let iceCreamFlavors= ["Chocolate", "Vanilla", "Strawberry", "Caramel"]

// let milkShakes =["chocolate shake", "vanilla shake",] ex:

let milkshakes= iceCreamFlavors.map(function(flavor) {
    return flavor+ " Shake"
})

console.log(milkshakes)

let myNormalPrices = [11.99, 14.99, 21.99]

let halfOffPrice= myNormalPrices.map(function (price) {
    return price / 2
})

console.log(halfOffPrice)

/* Filter: decreasing the data shape, to find specific data 
*/

let yummyFlavors= ["white chocolate", "dark chocolate", "dutch chocolate", "peanut butter", "caramel", "strawberry", "banana", "vanilla"]

let chocFlav= yummyFlavors.filter(function (flavor){
    if(flavor.includes("chocolate")) {
        return flavor
    }
}) 
console.log(chocFlav)

let myOriginalPrices= [ 12, 15, 22, 41, 3,57,38] 

let myDiscountedExpensiveThangs= myOriginalPrices.filter(function (price){
    if(price > 20) {
        return price /2 
    }
})

console.log(myDiscountedExpensiveThangs)

const users = [
    {firstName: "Kash", lastName: "Money", hasAdminAccess: true },
    {firstName: "Greyson", lastName: "Frazier", hasAdminAccess: true},
    {firstName: "Humpty", lastName: "Dumpty", hasAdminAccess: false },
]

console.log(users.filter(function(user) {
    if (user.hasAdminAccess == true) {
        return user 
    }
}).map(function(admin) {
    return `Mr. ${admin.firstName} ${admin.lastName}`
} ))

// 

// for (let position = 0; position < myNumbers.length; position ++) {
//     console.log(`Logged Number: ${myNumbers(position)}'\n)
//     console.log(`Popped number: ${myNumbers.pop}\n`)
// } // this example showed that .pop loop would remove half of the array, for each one counted, one removed, meaning half of it from the back is removed. 

function sayHiTo(username1){
    return `\nHi there, ${username1}!\n`
}

console.log(sayHiTo("Hills!"))

const greetUser = (username1) => {
    return `\nHi there, ${username1}!\n`
} // could end up being more code with an arrow, but it can be simple for operations 

// console.log(greetUser("Hillary!!"))

const sayHellotoMe = username1 => `\nHi there, ${username1}!\n`

console.log(sayHellotoMe("Hillary"))

// we used an arrow to map flavors, reducing code

var milkShakes= iceCreamFlavors.map(flavor => `${flavor} shake`)


// console.log(milkShakes)

console.log(users.filter(user => {
    if(user.hasAdminAccess == true)
        return user
}).map(admin => `Mr. ${admin.firstName} ${admin.lastName}`))

//REDUCE function 

const myPrice=[ 12,14,9,7,1,30,27]
let totalPrice=0 
for(let position=0; position <myPrice.length; position++) {
    totalPrice += myPrice[position]
}

console.log(myPrice.reduce((accumulator, currentPrice) => {
    return accumulator += currentPrice
}))

const expenseReport = [
    { description: "sausage egg and cheese sandwich", money: -5 }, 
    { description: "rideshare", money: -30},
    { description: "taught a class", money: 50}, 
    { description: "sold a blender", money: 15}, 
    { description: " bought a water bottle", money: -2 },
]

// now we will get the net amount of money after gallavanting !!

const finalMoney= expenseReport.reduce((sumOfPricess, currentExpense) => {
    return sumOfPricess += currentExpense.money 
}, 0)

console.log(finalMoney)



// new function below

//categorize current expense as a profit or loss based on whether the expense's money is pos or neg 


const groupByGainOrLoss =(currentGrouping, currentObject) => {
    if(currentObject.money >= 0) {
        currentGrouping.profits.push(currentObject)
    } else {
        currentGrouping.losses.push(currentObject)
    }
    return currentGrouping
}

const initialGrouping = {    
    profits: [], 
    losses: [], 
}

const groupedProfitsandLosses = expenseReport.reduce(groupByGainOrLoss, initialGrouping) 

console.log(groupedProfitsandLosses)


