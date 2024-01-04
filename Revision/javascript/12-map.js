const myNumbers = [1,2,3,4,5,6,7,8,9,10]
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