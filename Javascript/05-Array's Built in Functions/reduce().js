const reduceOp = (total , num )=>{
    return total + num;
}

const numbers = [2, 4, 6, 8];
const a = numbers.reduce(reduceOp);
console.log(a);
