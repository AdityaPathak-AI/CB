var a = [],
  b = [],
  c = [],
  i,
  len;

len = +prompt("Enter Size Of Array");
for (i = 0; i < len; i++) {
  a[i] = +prompt("Enter Numbers");
}
document.write(a + "<br>");

for (i = 0; i < len; i++) {
  b[i] = +prompt("Enter Numbers");
}
document.write(b + "<br>");

c = a + "," + b;

document.write(c + "<br>");
