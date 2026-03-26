// Example - 1
var promise = new Promise((resolve, reject) => {
    resolve("Promise is Fulfilled!");
    reject("Something went Wrong!");
});

console.log(promise);

// Example - 2
var promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
     resolve({message: 'success'});
    }, 3000);
});

console.log(promise);

// Example - 3
var promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject({message: 'error'});
    }, 3000);
});

promise
.then((data) => {
    console.log(data);
})
.catch((error)=> {
    console.log(error);
})