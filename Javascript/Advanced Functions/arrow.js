/*var p,r,t;
const si = (p, r, t) => 
{
    return (p*r*t)/100;
};
console.log(si(10,20,1));
*/

/*
const square =(num)=> num*num;
console.log(square(3));
*/

/*
const si = (p,r,t)=> p*r*t;
console.log(si(300,10,2));
*/

/*
const a = (num) => {
  for (var i = 1; i <= 10; i++) {
    b = num * i;
    console.log(b);
  }
};
a(2);
*/

/*
const sayHello = () =>
{
  console.log("hello");
}
sayHello()
*/

var findMaxAndMin = (arr) => {
   max = min = arr[0];

  for (let i = 1; i < arr.length; i++) 
  {
    if (arr[i] > max)
    {
      max = arr[i];
    }
    if (arr[i] < min)
    {
      min = arr[i];
    }
  }
  return { max, min }; 
};
const arr = [2, 1, 5, 3, 4];
const result = findMaxAndMin(arr);
console.log("Max:", result.max);
console.log("Min:", result.min);


/*
 var myArray = [1, 2, 3, 4];
 console.log(myArray.reduce((a, b) => Math.min(a, b)));
 console.log(myArray.reduce((a, b) => Math.max(a, b)));

*/ 




