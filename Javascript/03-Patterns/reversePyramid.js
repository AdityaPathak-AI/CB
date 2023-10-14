var i, j, k;

for (i = 5; i >= 1; i--) {
  for (j = 5; j > i; j--) document.write("&ensp;");

  for (k = 1; k <= i; k++) document.write("*" + "&ensp;");
  document.write("<br>");
}
