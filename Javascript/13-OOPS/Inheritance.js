class Car {
  test(make, model, color){
    this.make = make;
    this.model = model;
    this.color = color;
    console.log(`${this.make} ${this.model} ${this.color}`);
  }
  
  word(name, age, type){
    this.name = name;
    this.age = age;
    this.type = type;
    console.log(`${this.name} ${this.age} ${this.type}`);
  }
}
const car1 = new Car();
car1.test("car", "toyota", "red");
const car2 = new Car();
car2.word("Chidiya", "2", "Bird");

//Extended Class 1

class Model extends Car {
  test1(gender, city, number) {
    this.gender = gender;
    this.city = city;
    this.number = number;
    console.log(`${this.gender} ${this.city} ${this.number}`);
  }
}
let model = new Model();
model.test1("Female", "Gwalior", "21");
model.test("hello", "ji", "namastey");

//Extended Class 2
class Truck extends Car{
   Bult(gears , speed , type){
    this.gears = gears;
    this.speed = speed;
    this.type = type;
    console.log(`${this.gears} ${this.speed} ${this.type}`);
   }
   test3(hello,hi,bonjoir){
    this.hello = hello;
    this.hi = hi;
    this.bonjoir = bonjoir;
    console.log(`${this.hello} ${this.hi} ${this.bonjoir}`);
   }
}
let crook = new Truck();
crook.Bult("7" , "150" , "2-axle");
let india = new Truck();
india.test("jiji","hihi","nono");


