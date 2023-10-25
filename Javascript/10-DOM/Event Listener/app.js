const grandparent = document.querySelector(".grandparent") 
const parent = document.querySelector(".parent") 
const child = document.querySelector(".child")

grandparent.addEventListener('click' , e => {
    console.log("Granparent")
},
{
    capture:true
}
)
parent.addEventListener('click' , e => {
    console.log("Parent")
})
child.addEventListener('click' , e => {
    console.log("Child")
})
