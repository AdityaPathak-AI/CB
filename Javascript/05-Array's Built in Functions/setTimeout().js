let greet_one = "Hello";
let greet_two = "World!!!";
console.log(greet_one);
setTimeout(function () {
  console.log("Asynchronous");
}, 1000);
console.log(greet_two);


