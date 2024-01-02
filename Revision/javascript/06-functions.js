function loginUser(username){
    return `${username} just logged-in`
}
console.log(loginUser("Aditya"));

//rest operator
function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200,400,600));

const user = {
    username : "Aditya",
    price : 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is $(anyobject.price)`);
}
handleObject(user)

//direct pass object

handleObject({
  username: "Aditya",
  price: 200,
});

//passing array

const newArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(newArray));