let a = 300; //global scope values are available in block
{
    let a = 20;
    const b = 10;
    var c = 30;
    console.log(a); //block scope values are not available outside scope
}
console.log(a);
// console.log(b);
console.log(c);


//function scoping

function one(){
    const username = "adityaism"

    function two(){
        const website = "youtube"
        console.log("Username is: ",username)
    }
    // console.log(website);
    two()
}
one()

//int

console.log(addOne(5));
function addOne(num){
    return num + 1;
}

//console.log(addTw0(5)); //will give error
const addTw0 = function(num){
    return num + 1;
}
console.log(addTw0(5));

//this 
let obj = {
    name : 'Adi',
    age : 26,
    showName : function (){
        console.log(`My Name is ${this.name}`);
    }
}
obj.name = 'richa'
obj.showName()

