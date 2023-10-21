var bulb = document.querySelector("#bulb")

// var btn = document.querySelector("#On")

var btn1 = document.querySelector("#On")
var btn2 = document.querySelector("#Off") 


// var flag = 0
// btn.addEventListener("click", function(){
//     if(flag == 0)
//     {
//     bulb.style.backgroundColor = "yellow";
//     flag = 1
//     }
//     else
//     {
//     bulb.style.backgroundColor = "black";
//     flag = 0;
//     }  
//     
// })

btn1.addEventListener("click",function(){
    bulb.style.backgroundColor = "yellow";
})

btn2.addEventListener("click", function(){
    bulb.style.backgroundColor = "black";
})