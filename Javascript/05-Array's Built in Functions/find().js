var numbers = [1,3,4,9,8];

function isEven(element){
    return element%2 == 0;
}

evenNumber = numbers.find(isEven);
console.log(evenNumber);