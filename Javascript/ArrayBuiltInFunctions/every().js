function CheckAdult(age){
    return age >= 18;
}
var age = [34,23,20,26,24];
let check = age.every(CheckAdult);
console.log(check);

//The every() method checks if all the array elements pass the given test function.