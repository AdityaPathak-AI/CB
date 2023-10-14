function isEven(element){
    return element % 2 ==0;
}
numbers = [1,3,4,5,6];

EvenNumber = numbers.findIndex(isEven);
console.log(EvenNumber);
