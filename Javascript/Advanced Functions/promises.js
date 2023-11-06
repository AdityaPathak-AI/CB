var p = new Promise(function (resolve, reject) {
  var age = +prompt("Enter age");

  if (age > 18) resolve(" executed and resolved successfully");
  else reject("rejected");
});
p.then(function (fromResolve) {
  console.log("eligible for voting" + fromResolve);
}).catch(function (fromReject) {
  console.log("not eligible for voting " + fromReject);
});
