/*
function modifyText() {
  const t2 = document.getElementById("t2");
  const isNodeThree = t2.firstChild.nodeValue === "three";
  t2.firstChild.nodeValue = isNodeThree ? "two" : "three";
}


const el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);
*/
 


function addTen(num) {
  num += 10;
  return num;
}
var result = addTen(10);
console.log(result);
