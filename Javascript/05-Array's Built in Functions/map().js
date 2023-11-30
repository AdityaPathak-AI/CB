/*
const numbers = [2, 4, 6, 8];
const newArr = numbers.map(myFunction);
console.log(newArr);

function myFunction(num) {
  return num * 10;
}
/*

map() creates a new array from calling a function for every array element.

map() does not execute the function for empty elements.

map() does not change the original array.

*/

const persons = [
    {
        firstname : "Aditya", 
        lastname : "Pathak"
    },
    {
        firstname : "Sumit",
        lastname : "Pathak"
    },
    {
        firstname : "Krishna",
        lastname : "Kaul"
    },
]

//With Arrow Function
let getFullName = (item) => {
  return [item.firstname, item.lastname].join(" ");
};

let fullNames = persons.map(getFullName);
console.log(fullNames);

// With Normal Function

function getFullName(item){
    return[item.firstname , item.lastname].join(" ");
}
var fullname = persons.map(getFullName);
console.log(fullname);