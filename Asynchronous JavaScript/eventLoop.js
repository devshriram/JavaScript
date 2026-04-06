console.log(1);

setTimeout(()=>{
    console.log(2);
},0);

console.log(3);

// Event Loop checks whether Call Stack is empty or not. 

// Callback function passed to Task queue after the timer ends.