var i, j, k;

for (i = 5; i >= 1; i--) {
  for (j = 1; j <= i; j++) document.write("&ensp;");
  for (k = 5; k >= i; k--) document.write("*" + "&ensp;");
  document.write("<br>");
}
