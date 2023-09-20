var sum = 0;
var i = 1;

while (i <= 10) {
  var a = +prompt("Enter Your Numbers");
  document.write(a + "<br>");
  i = i + 1;
  sum = sum + a;
}
document.write(sum);
