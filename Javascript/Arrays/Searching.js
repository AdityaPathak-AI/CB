var a = [];
var num = +prompt("enter the length of Array");
for (i = 0; i < num; i++) {
  a[i] = +prompt("enter a number");
}
document.write(a + "<br>");
var num1 = +prompt("enter searching  number");
for (i = 0; i < a.length; i++) {
  if (a[i] == num1) {
    document.write(num1 + " " + "number is present in a array");
  }
}
