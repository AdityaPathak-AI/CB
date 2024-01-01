let myArray = [1,2,3,4,5]
myArray.unshift(9); //[ 9, 1, 2, 3, 4, 5 ]
myArray.shift(); //[1, 2, 3, 4, 5];

console.log(myArray.includes(5));  //true
console.log(myArray.indexOf(2));
console.log(myArray);

let newArray = myArray.join()
console.log(newArray); //converted to string
console.log(typeof newArray);

//slice & splice

let arrayOne = [1,2,3,4,5]
console.log(arrayOne.slice(1,3)); //slice return a new array from the existing array.
console.log(arrayOne.splice(1,3)); //splice manipulates the original array.
console.log(arrayOne);
