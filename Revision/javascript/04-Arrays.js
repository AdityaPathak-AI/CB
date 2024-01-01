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

//concat

marvel_heroes = ['winter soldier', 'hawkeye' , 'black panther']
dc_heroes = ['robin' , 'joker' , 'deathstroke']
superheroes = marvel_heroes.concat(dc_heroes)
console.log(superheroes);

//spread operator
let allHeroes = [...marvel_heroes , ...dc_heroes] 
console.log("spread operator in action:",allHeroes);

//flat 

let race = ['indian' , 'tibetan' , 'sindhi' , ['chinese','korean','japanese'] , 'filipino' , ['indonesia','laotian']]
let mixedRace = race.flat(Infinity);
console.log(race);
console.log(mixedRace);

//from
console.log(Array.isArray("Aditya")); //will return false.
console.log(Array.from("Aditya")); // convert it into array.
console.log(Array.from({name:'Aditya'}));  //will return an empty object.

//of

score1 = 100
score2 = 200
score3 = 'not available'
console.log(Array.of(score1,score2,score3));