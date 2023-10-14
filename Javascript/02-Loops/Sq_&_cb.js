var b, p;
b = +prompt("Enter Starting Point");
p = +prompt("Enter Ending Point");

while (b <= p) {
  document.write(b + " " + b * b + " " + b * b * b + "<br>");
  b = b + 1;
}
