const name = 'Aditya'

//
console.log(name[0]);
console.log(name.__proto__);
console.log(name.toUpperCase());
console.log(name.charAt(5));
console.log(name.indexOf('t'));

// In substring we can't give negative values.
const newString = name.substring(0,3)
console.log(newString); 

//In Slice we can give negative values.
const anotherString = name.slice(-4,4)
console.log(anotherString);

// Reverse a string using split and reverse methods.

normalString = '' 

//Trim 
const newStringOne = "   Aditya    "
console.log(newStringOne);
console.log(newStringOne.trim());

//replace
const url =  "https://aditya.com/aditya%20pathak"
console.log(url);
console.log(url.replace('%20' , '-'));

//includes
const fruits = ['apple', 'banana','cherry'];
console.log(fruits.includes("apple")); // Returns true if the value is present in an array.

//startsWith & endsWith
console.log(name.endsWith('y'));
console.log(name.startsWith('A'));


