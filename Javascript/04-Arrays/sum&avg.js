var a = [];
var sum = 0;
var avg, len;
len = +prompt("Enter Length of an Array:");

if (!isNaN(len) && len > 0) {
  for (var i = 0; i < len; i++) {
    a[i] = +prompt("Enter a Number:");
    sum += a[i];
  }
  avg = sum / len;

  document.write("Entered Numbers:<br>");
  for (var i = 0; i < len; i++) {
    document.write(a[i] + "<br>");
  }

  document.write("Sum: " + sum + "<br>");
  document.write("Average: " + avg.toFixed(2));
} else {
  document.write(
    "Invalid input. Please enter a valid positive number for the array length."
  );
}
