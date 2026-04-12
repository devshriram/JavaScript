// Example - 1
var promise = new Promise((resolve,reject)=>{
    resolve('Resolved');
});

promise.then((data)=>{
    console.log(data);
});


// Shorthand Property
Promise.resolve('Resolved').then((data)=>{console.log(data)});

// Example - 2
async function asyncTask() {
    return 'Resolved';
}

asyncTask().then((data)=>{console.log(data)});

// Example - 3
function getData() {
    return Promise.resolve('Some data');
}

async function abc() {
    const data = await getData();
    console.log(data);
}

abc();
console.log('1');