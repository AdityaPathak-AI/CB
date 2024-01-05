const student = {
  name: "Aditya",
  displayName() {
    return this.name + " is Coding";
  },
};

const student2 = {
  name: "Sumit",
};
let hyperStudent = student.displayName.bind(student2);
console.log(student.displayName());
console.log(hyperStudent());

/*
const student = {
  name: "Aditya",
  displayName() {
    return this.name + " is Coding";
  },
};

const student2 = {
  name: "Sumit",
};
// Method 1 - Using call 
console.log(student.displayName.call(student2)); 
// Method 2 - Using apply
console.log(student.displayName.apply(student2));
// Method 3 - Using bind
const boundDisplayName = student.displayName.bind(student2);
console.log(boundDisplayName()); 
*/
