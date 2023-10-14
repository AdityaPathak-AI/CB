let numbers = [1,2,3,4,5,6,7,8,9,10];

function checkEven(numbers)
{
    if(numbers %2 == 0)
        return true;
    else
        return false;
}       
EvenNumbers = numbers.filter(checkEven);
console.log(EvenNumbers);

/*The filter() method returns a new array with all elements that pass the test defined by the 
given function */