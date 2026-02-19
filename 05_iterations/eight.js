const myNume = [1, 2, 3]

const newvar = myNume.reduce( function (acc, curt) {
    console.log( `acc valu is ${acc} and current value is ${curt} `)
    return acc + curt
}, 0)


const myTotal = myNume.reduce( (acc, curt) => acc + curt, 0)

console.log(myTotal)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999,
        order: 2,
    },
    {
        itemName: "py course",
        price: 999,
        order: 1
    },
    {
        itemName: "mobile dev course",
        price: 5999,
        order: 4

    },
    {
        itemName: "data science course",
        price: 12999,
        order: 2
    },
]


const paybill = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(paybill)

const newbill = shoppingCart.reduce((acc, item) => {
    return acc + item.price
}, 0);
console.log(newbill)

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);

const orderNum = shoppingCart.reduce((acc, item) => acc + item.order, 0)
console.log(orderNum)



shoppingCart.forEach((newvalue) =>  {

    if (newvalue.price > 2999) {
        return console.log(`here is value ${newvalue.price}`)
    }

})

shoppingCart.forEach((item) =>  {

    const total = item.price * item.order; 

    if (total > 2999) {
         console.log(`${item.itemName}  total : ${total}`)
    }

})