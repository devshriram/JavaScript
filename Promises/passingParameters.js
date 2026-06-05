var userLoggedIn = true;

function checkUserLoggedIn() {
var promise = new Promise((resolve,reject)=>{

    // Wait for 1 sec
    setTimeout(()=>{
        // Resolve
        if(userLoggedIn) {
            resolve("User is LoggedIn!!");
        } else {
            // Reject
            reject("User is LoggedOut!!");
        }
    }, 1000);
});

return promise;
}

checkUserLoggedIn().then((msg)=>{
    console.log(msg);
}).catch((msg)=>{
    console.log(msg);
});