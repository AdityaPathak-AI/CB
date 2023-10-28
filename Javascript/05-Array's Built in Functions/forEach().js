// Call a function for each Element.
/*
const a = [1, -2, 3, -4, 5, -6, 7, -8, 9, 10];
const neg = (num)=>{
    return num <0;
}
a.forEach((num)=>{
    num<0;
    console.log(a)
})

a.forEach((num,i)=>
{
console.log(num,i);
});
Find the EVEN numbers in an array
*/

/* Negative */

const arr = [1, -2, 3, -4, 5, 6, 7, -8, 9];
const neg = [];
arr.forEach(number => {
  if (number < 0) {
    neg.push(number);
  }
});x
console.log(neg);
