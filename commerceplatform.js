const userOrders = [
    {
        name: "Kathy",
        orders: [ 
            {name:"Coffee K-Cups", amount:100, status: "Delivered" },
            {name:"Plastic Cup", amount:50, status: "Pending" },
            {name:"Pencil", amount:200, status: "Delivered" },
        ]
    },
    {
        name: "Gracie",
        orders: [ 
            {name:"Crop Top", amount:20, status: "Delivered" },
            {name:"Mousepad", amount:50, status: "Cancelled" },
        ]
    },
    {
        name: "Carla",
        orders: [ 
            {name:"Gaming PC", amount:1, status: "Delivered" }
        ]
    },
] 
// console.log(userOrders) 
/*
For each user, I want to identify the total number of successfully completed deliveries as well as how many total individual products were delivered overall to that user 

[ 
 {Name: "Kathy", delivered orders: 2, total items delivery quantity: 300}
 {Name: "Gracie", delivered orders: 1, total items delivery quantity: 20}
 {Name: "Carla", delivered orders: 1, total items delivery quantity: 1}    
]

MAJOR HINT: all 3 aggregate functions will be used (map, reduce, filter)

we have TWO major arrays, userorders and orders. 
-> `.map` is a good choice for navigating the user orders, because size of the user orders (people) is not changing 
-> `.filter` AND `.reduce` are good choices for getting delivered orders and reducing them into relevant pieces of returned info. 

we are likely going to nest filtering and reduction operations INSIDE the mapping function

*/

const ordersQuery= userOrders.map(user => {
    // console.log(`\n >> Current user is ${user.name}`)
    const completedDeliveries= user.orders.filter(order => order.status === "Delivered")
    const totaldeliveries=completedDeliveries.reduce((sumOfOrderAmounts, order) => sumOfOrderAmounts + order.amount, 0)
    return {
        name: user.name,
        deliveredOrders: completedDeliveries.length,
        totalDeliveryQuantity: totaldeliveries, 
    }
},)

console.log(ordersQuery)