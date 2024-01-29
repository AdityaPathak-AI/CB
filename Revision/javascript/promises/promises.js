// Promise 1
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("async task completed");
    resolve()
  }, 3000);
});
//.then is connected to resolve
promiseOne.then(() => {
  console.log("Promise Consumed");
});

new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('async task 2');
        resolve()
    },1000)

}).then(()=>{ 
    console.log("async 2 resolved");
})

// Promise 3

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve({username : "aditya" , email: "adityapathakwork@gmail.com"})
    },1000)
})
promiseThree.then((user)=>{
    console.log(user);
})



// Promise 4
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username:'aditya', password:'123'})
            }else{
                reject('something went wrong')
                }
    },1000)
})

const username = promiseFour.then((user)=>{
    console.log(`Logged in as ${user}`)
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('this is finally block');
})


// Promise 5

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = true;
      if (!error) {
        resolve({ username: "javascript", password: "123" });
      } else {
        reject("JS went wrong");
      }
    }, 1000);
})

async function consumePromiseFive(){
    try{
    const response = await promiseFive 
    console.log(response);
}catch(error){
    console.log(error);
    }
}
consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("e" , error);
    }
}
getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>console.log(data))
.catch((error)=> console.log(error))





    