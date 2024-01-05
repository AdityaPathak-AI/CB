const student = {
  name: "Aditya",
    printName() {
    console.log(this.name);
  },
};
student.printName();

const student2 = {
  name: "Sumit",
};

student.printName.call(student2);


