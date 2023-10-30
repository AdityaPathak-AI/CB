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


var a = (arr) => {
  arr = [1, 2, 3, 4, 5, 6];
  max = min = arr[0];
  for(i=0;i<arr.length;i++){
    if(arr[i]>max)
    max = arr[i];
    if(arr[i]<min)
    min = arr[i];
  }
  console.log(max);
  console.log(min);  
}




