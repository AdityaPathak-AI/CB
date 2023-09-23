// x++ + ++x + ++x - --x + --x
// 10+12+13-12+11

// let a = 1;
// a+=5
// console.log(a)
// a-=1
// console.log(a)
// a*=5
// console.log(a)
// a/=5
// console.log(a)

// 1
// Num = +(prompt("Enter Number to check"));
// if(Num%2==0)
// document.write("Your Number is Even")
// else
// document.write("Your Number is odd")

// 2
// Num1= +(prompt("enter first number"));
// Num2= +(prompt("enter first number"));

// if(Num1%Num2==0)
// document.write("Is Divisible")
// else
// document.write("not divsible")

// 3
// Num1= +(prompt("enter first number"));
// Num2= +(prompt("enter second number"));
// Num3= +(prompt("enter third number"));

// if(Num1>Num2 && Num1>Num3)
// document.write("First is greater");
// else
// if(Num2>Num3)
// document.write("Second is greater");
// if(Num1==Num2 && Num1==Num3)
// document.write("All numbers are equal");
// else
// document.write("Enter Valid Number");

// var character = prompt("Enter a character:");

// if ((character >= 'a' && character <= 'z') || (character >= 'A' && character <= 'Z'))
// {
//   if (character === character.toLowerCase())
//    {
//     document.write(character + " is in lowercase.");
//    }
//   else
//    {
//     document.write(character + " is in uppercase.");
//    }
// }

// var basicSalary = parseFloat(prompt("Enter the basic salary:"));
// var hra, da;

// if (basicSalary <= 10000) {
//   hra = 0.2 * basicSalary;
//   da = 0.8 * basicSalary;
//   document.write("1.");
// }
// else if (basicSalary <= 20000) {
//   hra = 0.25 * basicSalary;
//   da = 0.9 * basicSalary;
//   document.write("2.")
// }
//  else {
//   hra = 0.3 * basicSalary;
//   da = 0.95 * basicSalary;
//   document.write("3.");
// }

// var grossSalary = basicSalary + hra + da;

// document.write("Basic Salary: $" + basicSalary.toFixed(2) + "<br>");
// document.write("HRA: $" + hra.toFixed(2) + "<br>");
// document.write("DA: $" + da.toFixed(2) + "<br>");
// document.write("Gross Salary: $" + grossSalary.toFixed(2));

// var Num = +(prompt("Enter Number to view your day"));
// switch(Num)
// {
//     case 0:
//     Num = "Sunday"
//     document.write("Sunday")
//     break;

//     case 1:
//     Num = "Monday";
//     document.write("Monday");
//     break;

//     case 2:
//     Num = "Tuesday";
//     document.write("Tuesday");
//     break;

//     case 3:
//     Num = "Wednesday";
//     document.write("Wednesday");
//     break;

//     case 4:
//     Num = "Thursday";
//     document.write("Thursday");
//     break;

//     case 5:
//     Num = "Friday";
//     document.write("Friday");
//     break;

//     case 6:
//     Num = "Saturday";
//     document.write("Saturday");
//     break;

//     default:
//     document.write("Invalid Number")

// }

// var a = +(prompt("Enter first number:"))
// var b = +(prompt("Enter second number:"))

// var operation = +prompt("Choose operation from \n 1)+  \n 2)-  \n 3)*  \n 4)/ ");
// var result

// switch(operation){
//     case 1:
//         result=a+b;
//         document.write(result)
//         break;

//     case 2:
//         result = a-b;
//         document.write(result)
//         break;

//     case 3:
//         result = a*b;
//         document.write(result)
//         break;

//     case 4:
//         result = a/b;
//         document.write(result)
//         break;

//     default:
//         document.write("Inavlid Keys");

// }

// var i = 1 ;
// sum=0;

// while(i<=10)
// {
// document.write(i*i*i+"<br>");
// sum=sum+(i*i*i);
// i=i+1;
// }
// document.write(sum);

// var i = 1 ;
// sum=0;

// while(i<=10)
// {
// document.write(i*i+"<br>");
// sum=sum+(i*i);
// i=i+1;
// }
// document.write(sum);


/* var i = 1;
var sum = 0;
while (i <= 10) {
  var a = +prompt("Enter Your Number");
  sum = sum + a;
  i = i + 1;
}
avg = sum / 10;
document.write(sum, "<br>");
document.write(avg);*/


/* square and cube of a number

var b , p;
b = +prompt("Enter Starting Point");
p = +prompt("Enter Ending Point");

while(b<=p)
{
  document.write(b + " " + b*b +" "+ b*b*b  + "<br>");
  b=b+1;
}

*/

// a = +prompt("Enter Number You want a table for");
// i = 1;
// while (i <= 10) {
//   document.write( a * i + "<br>");
//   i = i + 1;
// }


// var sum=0;
// var i = 1;

// while(i<=10)
// {
//   var a = +prompt("Enter Your Numbers");
//   document.write(a + "<br>");
//   i=i+1;
//   sum=sum+a;
// }
// document.write(sum);



  
// var n = parseInt(prompt("Enter a number:"));
// var sum = 0;
// var i = 1; 


//   while (i <= n) {
//     document.write(i+"<br>");
//     sum += i;
//     i = i + 2; 
//   }
//    document.write("The sum of even numbers between 1 and " + n + " is: " + sum);
  

// var i;
// f = 1;
// n = +prompt("Enter Your Number");

// for (i = 1; i <= n; i++) {
//   f = f * i;
//   document.write("Factorial Is" + f + "<br>");
// }

// var i;
// c = 0;
// n = +prompt("enter no to check");

// for (i = 1; i <= n; i++) {
//   if (n % i == 0) c++;
// }

// if (c == 2) document.write(n + "Is a Prime Number");
// else document.write(n + "Is Not a Prime Number");


// var i , j ;

// for (i=1 ;i<=5 ;i++)
//  {
//   for(j=1;j<=5;j++)
//   {
//     document.write("*");
//   }
//  }
//  document.write("<br>");

// infinite loop
var i, j;


for(i=1 ; i<=3 ; i++)
{
  for(j=1 ; j<=5 ; j++)
  {
    document.write("*");
  }
  document.write("<br>");
}

