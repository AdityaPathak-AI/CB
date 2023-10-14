var sum = 0;
while (i <= 10) {
  var a = +prompt("Enter Your Number");
  sum = sum + a;
  i = i + 1;
}
avg = sum / 10;
document.write(sum, "<br>");
document.write(avg);
