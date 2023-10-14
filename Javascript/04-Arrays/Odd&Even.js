var a = [],
  len,
  i,
  Even = [],
  Odd = [],
  count = 0;
count1 = 0;
len = +prompt("Enter the size of the array");

for (i = 0; i < len; i++) {
  a[i] = +prompt("Enter a number");
  if (a[i] % 2 === 0) {
    Even = a[i];
    document.write("Even Numbers Are:" + Even + "<br>");
    count++;
  } else {
    Odd = a[i];
    document.write("Odd Numbers Are:" + Odd + "," + "<br>");
    count1++;
  }
}

document.write("Entered Numbers: " + a + "<br>");
document.write("Even Numbers: " + count + "<br>");
document.write("Odd Numbers: " + count1 + "<br>");
