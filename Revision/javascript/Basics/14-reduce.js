const myNums = [1,2,3]
// const myTotal = myNums.reduce(function(acc,cvalue){
//     console.log(`acc: ${acc} and cvalue: ${cvalue}`);
//     return acc + cvalue;
// }, 0)

const myTotal = myNums.reduce((acc,cvalue) => acc+cvalue,0)
console.log(myTotal);

const shoppingCart =  [
    {
        itemName : 'javascript course',
        price : 5300,
    },
    {
        itemName : 'python course',
        price : 9300,
    },
    {
        itemName : 'java course',
        price : 8300,
    },
    {
        itemName : 'Kotlin course',
        price : 2300,
    },
    {
        itemName : 'vs course',
        price : 2300,
    },
]
const priceToPay = shoppingCart.reduce((acc , item)=> acc + item.price,0)
console.log(priceToPay);
