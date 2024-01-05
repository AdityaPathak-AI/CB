var x = 10;
function Adi(){
    console.log("Adi Call:",x);
    return x;
     //10
}

console.log('Function Print', Adi()); ; //10
console.log('Function without parenthesis', Adi); // [Function: Adi]
console.log("Global Call:",x); //10

x = Adi()
console.log("x assigned the function with parenthesis:", x) //10

x = Adi
console.log("x assigned the function without parenthesis:", x);  // [Function: Adi]
