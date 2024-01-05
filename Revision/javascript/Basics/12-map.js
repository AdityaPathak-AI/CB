/*const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNumbers.map((num) => num+10 )
console.log(newNums);

//by for-Each
const moreNums = [];
myNumbers.forEach((num) => {
  if (true) {
    moreNums.push(num+10);
  }
});
console.log(newNums);
*/
//Chaining
const newNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNumbs = newNumbers
                .map((num)=>num*10)
                .map((num)=> num+1)
                .filter((num)=> num>=40)
console.log(newNumbs);

/*
const exactNumbers = [1,5,9,10]
const exactNumbers2 = exactNumbers.filter((num)=>num%2===0)
console.log(exactNumbers2)

const reduceArray = [1,2,3,4,5];
//const sumReducer = (accumulator, currentValue) => accumulator + currentValue
//const finalSum = reduceArray.reduce(sumReducer)
//console.log(finalSum)

const sumReducer = reduceArray((accumulator, currentValue)=> accumulator+currentValue)
console.log(sumReducer);
//const FinalSum = reduceArray.reduce(sumReducer)
//console.log(FinalSum)

*/


