function a(){
  var a = [],
  b = [],
  len,
  i;
  len = +prompt("enter size");
  for (i = 0; i < len; i++) a[i] = +prompt("Enter Number");
  max = min = a[0];

  document.write(a + "<br>");

  for (i = 0; i < a.length; i++) {
    if (a[i] > max) max = a[i];
    if (a[i] < min) min = a[i];
  }

  document.write("Maximun Number:" + max + "<br>");
  document.write("Minimum Number:" + min + "<br>");
}
a()