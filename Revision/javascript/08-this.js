
//this
let obj = {
  name: "Adi",
  age: 26,
  showName: function () {
    console.log(`My Name is ${this.name}`);
  },
};
obj.name = "aditya";
obj.showName();

// this.name = obj.name

const student = {
  name: "Aditya",
  printName: function () {
    console.log(this.name); 
  },
};

student.printName(); // Here during the execution of student.printName(), the value of this will be student.

const student2 = {
  name: "Sumit",
};

student.printName.call(student2);

//Technically, it’s also possible to access the object without this, by referencing it via the outer variable:

//It’s common that an object method needs to access the information stored in the object to do its job.

//For instance, the code inside user.sayHi() may need the name of the user.

//To access the object, a method can use the this keyword.

//The value of this is the object “before dot”, the one used to call the method.

let user = { name: "Aditya" };
let admin = { name: "Sumit" };

function sayHi() {
  console.log(this.name);;
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)

//accessing object without using .f
let user = { name: "Aditya" };

user.getName = function() {
 console.log(this.name);
};

user.getName(); // Aditya


//this inside dom elements refers to HTML elements.




// this in function
function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();
``
console.log(user.ref.name); // will return undefined becuase there is no object to point in fuunction


// Key Points
//For referrig current context in scope this keyword is secureHeapUsed.
// In JavaScript, arrow functions do not bind their own this value.
// The this value of an arrow function depends on where it is defined rather than how it is called.
// in node env this this keyword return empty parenthesis. {}
// in browser this keyword returns window object.
// engine : dino , bun , node

const test = () => {
  let username = "aditya"
  console.log(this.username);
}
test(); //undefined because the arrow function does not have its own this.

//explicit return in arrow function.

const addTwo = (num1 , num2) => {
  return num1+num2
}
console.log(addTwo(3,4));

//implicit return in arrow function.

const implicitAdd = (x, y) => x + y;
console.log(implicitAdd(5,7)) ;//12




