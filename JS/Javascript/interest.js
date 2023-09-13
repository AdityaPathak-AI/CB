function SimpleInterest() {

  A = document.getElementById("Principal").value;
  B = document.getElementById("Interest").value;
  C = document.getElementById("Time").value;

  SimpleInt=(parseFloat(A)+parseFloat(B)+parseFloat(C))/100;
  Amount=parseFloat(A)+parseFloat(SimpleInt);

  document.getElementById("SI").innerHTML= "Your Simple Interest Is:"+ SimpleInt;
  document.getElementById("TotalAmount").innerHTML=  "Your Total Amount Is:"+Amount;
}


// #swapping without operators.
// a=a+b;
// b=a-b;
// a=a-b;

// document.write(10/3+"<br>")
// document.write(10%3+"<br>")
// document.write(parseInt(10/3+"<br>"));
// document.write(math.floor(10/3+"<br>"));


// var a1,a2,a3,b1,b2,b3,sum,rev;
// var n =parseInt(prompt("enter any 4 digit number")); //1234
// a1=Math.floor(n/1000); //1
// a2=n%1000; 234
// b1=Math.floor(b1/100); //2
// b2=b1%100; //34 
// a3=Math.floor(b2/10);3
// b3=b2%10; //4
// sum=a1+a2+a3+b3;
// rev=(b3*1000)+(a3*100)+(a2*10)+a1;
// document.write("Sum:" + sum + "<br>");
// document.write("reverse"+ rev +"<br>");


// number of days into week , days & years


// function Area(){
//   var radius = parseFloat(document.getElementById("radius").value);
//   var area = Math.PI*radius*radius;

//   document.getElementById("result").innerHTML="ares is:"
// }

// 12345
// 14325
