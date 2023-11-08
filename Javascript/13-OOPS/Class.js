class Car{
    constructor(Company , Model , Color){
        this.Company = Company;
        this.Model = Model;
        this.Color = Color;
        console.log(`${this.Company} ${this.Model} ${this.Color}`);
    }
}

 const car = new Car("Toyota","SUV","Black");
