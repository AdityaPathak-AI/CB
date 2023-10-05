var nm, ct, sl;
var i = 0;

nm = ["Vlamidir", "Rudiger", "Kurshov", "Kadyrov", "Nurmagomedov", "Makachev"];
ct = ["Siberia", "Moscow", "Berlin", "Chechnya", "Dagestan", "Belgorod"];
sl = ["83300", "25000", "780000", "560000", "150000", "50000"];
console.log(nm);

function sf() {
  document.f1.t1.value = nm[0];
  document.f1.t2.value = ct[0];
  document.f1.t3.value = sl[0];
  i = 0;
}

function slast() {
  document.f1.t1.value = nm[nm.length - 1];
  document.f1.t2.value = ct[ct.length - 1];
  document.f1.t3.value = sl[sl.length - 1];
  i = nm.length - 1;
}

function pre() {
  i = i - 1;
  if (i < 0) {
    alert("No more previous records");
    i = 0;
  } else {
    document.f1.t1.value = nm[i];
    document.f1.t2.value = ct[i];
    document.f1.t3.value = sl[i];
  }
}

function next() {
  i = i + 1;
  if (i >= nm.length) { 
    alert("No more records");
    i = nm.length - 1;
  } else {
    document.f1.t1.value = nm[i];
    document.f1.t2.value = ct[i];
    document.f1.t3.value = sl[i];
  }
}

function addNewRecord() {
  var newName = prompt("Enter a new name:");
  var newCity = prompt("Enter a new city:");
  var newSalary = prompt("Enter a new salary:");

  nm.push(newName);
  ct.push(newCity);
  sl.push(newSalary);
 
  i = nm.length - 1;
  document.f1.t1.value = nm[i];
  document.f1.t2.value = ct[i];
  document.f1.t3.value = sl[i];
}
function deleteRecord(){
  nm.pop()
  ct.pop()
  sl.pop()
}
function Store(){
  

}
