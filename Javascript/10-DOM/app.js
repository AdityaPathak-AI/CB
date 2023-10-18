 /*
 const title = document.querySelector('#main-heading');
 title.style.color = 'red';
 clg(title);
 */


/*
const title = document.querySelectorAll('.list-items')

for(i=0;i<listItems.length ; i++){
   listItems[i].style.fontSize = "40px";
 }
console.log(listItems);
 */

//Creating Element

const ul = document.querySelector("ul");
const li = document.createElement("li");
ul.append(li);

li.innerText = "Virat Kohli";
li.setAttribute("id", "main-heading");
li.classList.add("list-items");





