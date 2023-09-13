// document.write("*" + "<br>");
// document.write("**"+ "<br>");
// document.write("***"+ "<br>");
// document.write("****"+ "<br>");
// document.write("*****");

for (let i = 1; i <= 5; i++) {
  r = " ";
  for (let j = 1; j <= i; j++) {
    r += " * ";
  }
  console.log(r);
}