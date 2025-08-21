/* 
Single for loop 
*/

// for (let position=1; position <=10; position++ ) {
//     console.log(` << Current Position: ${position}`)
// }

// Nested `for` loop 

// for (let i=1; i <=3; i++) {
//     for (let j =1; j <=3; j++) {
//         console.log(` >> Current Position:(${i}, ${j})`)
//     }
// }

const frozenFruits = ["apple", "banana", "mango", "strawberry"]
const iceCreams = ["chocolate", "strawberry", "vanilla", "caramel"]

// Display all pairs of unique fruits and sweets.
function makeSmoothie(frozenFruits, iceCreams) {
    for (let fruitPosition = 0; fruitPosition < frozenFruits.length; fruitPosition++) {
        for (let sweetPosition = 0; sweetPosition < iceCreams.length; sweetPosition++) {
            // Check if the current fruit and the current ice cream AREN'T the same.
            if (frozenFruits[fruitPosition] != iceCreams[sweetPosition]) {
                console.log(`This smoothie is made with ${frozenFruits[fruitPosition]} & ${iceCreams[sweetPosition]}.`)
            }
        }
    }
}

console.log(makeSmoothie(frozenFruits, iceCreams))
