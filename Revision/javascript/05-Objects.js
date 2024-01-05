/*
const { log } = require("console");

let user = {
    name : 'Aditya Pathak',
    age : 20,
    email : 'aditya@gmail.com',
    gender : 'male',
    address : 'indore'
}
//console.log(user);
console.log(user['name']);

//freeze 

Object.freeze(user) //now this object will not change.

//keys and values

const player1 = {
    name : 'apuia',
    age : 23,
    position : 'midfielder',
    club : 'Mukti Bahini',
    country : 'Tibet',
    League : 'Tibetan Football League',
    salary : '120 cr',
    Goals : 7,
    Assists : 19,    
};

const player2 = {
  name: "ziyech",
  age: 24,
  position: "attacking midfielder",
  club: "Inter Kashi",
  country: "India",
  League: "Indian Super League",
  salary: "80 cr",
  Goals: 9,
  Assists: 12,
};

const Merge = {...player1,...player2}
console.log(Merge);

//keys
console.log(Object.keys(player1));
//values
console.log(Object.values(player2));

//de-structuring

let [name, age, position] = ["aditya", "21", "SDE-2"];
console.log(`I am ${name}, I'm ${age} years old and I am a ${position}`)
*/

//multiword property in object should be in qoutes
const user = {
  firstName:"Aditya",
  lastName:"Pathak",
  "email id" : "adityaism@gmail.com",
}
console.log(user.firstName)
//console.log(delete user["email id"])
console.log(user);

//shorthand property

const makeUser = (name , age) => {
  return{
    name : name ,
    age : age ,
  }
}
let displayUser = makeUser('Aditya' , 30)
console.log(displayUser.name);


    