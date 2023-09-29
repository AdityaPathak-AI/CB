var a = [],
  len,
  i,
  Even = [],
  Odd = [];

len = +prompt("Enter the size of the array");

for (i = 0; i < len; i++) {
  a[i] = +prompt("Enter a number");
  if (a[i] % 2 === 0) {
    Even.push(a[i]);
  } else {
    Odd.push(a[i]);
  }
}

document.write("Entered Numbers: " + a + "<br>");
document.write("Even Numbers: " + Even + "<br>");
document.write("Odd Numbers: " + Odd + "<br>");
