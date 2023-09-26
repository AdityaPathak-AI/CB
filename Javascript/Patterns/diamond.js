var i, j, k, a, b;
for (i = 5; i >= 1; i--) {
  for (j = 1; j <= i; j++) {
    document.write("&ensp;");
  }
  for (k = 5; k >= i; k--) {
    document.write("*" + "&ensp;");
  }
  document.write("<br>");
}
for (a = 5; a >= 1; a--) {
  for (b = 6; b >= 1; b--) {
    if (a >= b) document.write("*" + "&ensp;");
    else document.write("&ensp;");
  }
  document.write("<br>");
}
