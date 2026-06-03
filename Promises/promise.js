var userLoggedIn = false;

var promise = new Promise((resolve, reject)=>{

    // Wait for 1 sec
    setTimeout(()=>{
        // Resolve
        if(userLoggedIn) {
        resolve();
        } else {
        // Reject    
        reject();
        }
    }, 1000);
});

promise.then(()=>{
    console.log("User Logged In!!");
}).catch(()=>{
    console.log("User not Logged In!!")
});