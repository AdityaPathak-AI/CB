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

//Extended Class

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
