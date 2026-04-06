setTimeout(()=>{
    console.log(1);
}, 0);

var promise = new Promise((resolve,reject)=>{
    resolve(2);
});

promise.then((data)=>{
    console.log(data);
});

console.log(3);

// Event loop give priority to Micro task queue (Promise pass to Micro task queue and setTimeout pass to Task Queue).