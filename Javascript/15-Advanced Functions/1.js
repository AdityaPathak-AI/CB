/* const a = [1,-2, 3, -4, 5, -6, 7, -8, 9, 10]
const firstNeg = (num)=>{
    return num<0;
}
const result = a.find(firstNeg);
console.log(result);
*/

 /*var calculate = (a, b) => {
  const add = a + b;
  const substract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, substract, multiply, divide];
}
const [adder, substract, multiply, divide] = calculate(4, 7);
console.log(adder);
console.log(substract);
console.log(multiply);
console.log(divide);
*/

/*
const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };

//Check the result object in the console:
console.log(myUpdatedVehicle);
*/

// const myObject = {
//   key1: "value1",
//   key2: "value2",
//   key3: "value3",
// };

// const valuesArray = [];

// for (let key in myObject) {
//   if (myObject.hasOwnProperty(key))
//    {
//     valuesArray.push(myObject[key]);
//   }
// }

// console.log(valuesArray);

// const myVehicle = {
//   brand: "Ford",
//   model: "Mustang",
//   color: "red",
// };
// const updateMyVehicle = {
//   type: "car",
//   year: 2021,
//   color: "yellow",
// };

// const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };
// console.log(myUpdatedVehicle);


const arr1 = [1, 2, 3, 4];
const arr2 = [2, 5, 7, 9];
const arr3 = [...arr1, ...arr2];
console.log(arr3);



