function SimpleInterest() {

  A = document.getElementById("Principal").value;
  B = document.getElementById("Interest").value;
  C = document.getElementById("Time").value;

  SimpleInt=(parseFloat(A)+parseFloat(B)+parseFloat(C))/100;
  Amount=parseFloat(A)+parseFloat(SimpleInt);

  document.getElementById("SI").innerHTML= "Your Simple Interest Is:"+ SimpleInt;
  document.getElementById("TotalAmount").innerHTML=  "Your Total Amount Is:"+Amount;
}
