var i, j, k, a, b;

for (i = 5; i >= 1; i--) 
{
  for (j = 1; j <= i; j++) 
  {
    console.log("&ensp;");
  }
  for (k = 5; k >= i; k--) {
    console.log("*" + "&ensp;");
  }
  console.log("<br>");
}

for (a = 5; a >= 1; a--)
 {
  for (b = 6; b >= 1; b--) 
  {
    if (a >= b) 
      console.log("*" + "&ensp;");
    else 
      console.log("&ensp;");
  }
  console.log("<br>");
}
