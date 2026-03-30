// Example - 1
console.log(1);

setTimeout(()=>{
    console.log(2);
},1000);

console.log(3);

// Example - 2
var promise = new Promise((resolve,reject)=>{
    resolve(1);
});

promise.then((data)=>{
    console.log(data);
});

// Example - 3
console.log(1);

var promise = new Promise((resolve,reject)=>{
    resolve(2);
});

promise.then((data)=>{
    console.log(data);
});

console.log(3);