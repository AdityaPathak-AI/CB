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

const myObject = {
    'game1':'NFS',
    'game2':'Spiderman'
}
