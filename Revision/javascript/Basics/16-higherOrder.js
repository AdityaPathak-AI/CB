//for-of

const arr = [1,2,3,4,5]

for(const num of arr){
    console.log(num );
}

const greetings = "Bonjoir!"
for(const greet of greetings)
{
    console.log(greet);
}

//Map have unique key value pairs

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

console.log(map);

for(const [key,value] of map){
    console.log(key , "=" , value);
}

for (const key in map){
    if(map.hasOwnProperty(key)){
        console.log(`${key}: ${map[key]}`)
        }
}


//for-in
//it' used to iterate over keys in object.

const myObject = {
  js: "javascript",
  cpp: "C++",
  rb : 'ruby',
  java : 'java'
};

for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`);
   console.log(key);
    }

const programming = ["js" , "rb" , "py" , "java"]
for(const key in programming){
    console.log(key);
    console.log(programming[key]);
}

//for-Each

const coding = ["js", "rb", "py", "java"];
coding.forEach((item,index)=>{
    console.log(`The ${index+1}th language is ${item}`);
    });

/* passing function as argument in for-Each */

function printMe(item){
    console.log(item);
}
coding.forEach(printMe);

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

const myCoding = [
    {
        lang:"python",
        version:"3.8"
        
    },
    {
        lang:"javascript",
        version:"ES6"
    },
]
myCoding.forEach((item)=>{
    console.log(item.lang);
    console.log(item.version);
})