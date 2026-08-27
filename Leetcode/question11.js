/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    var result = 0;
    var completed = 0;

    return new Promise((resolve,reject)=>{
        promise1.then((data)=>{
            result+=data;
            completed++;
            if(completed===2) {
                resolve(result);
            }
        });
        promise2.then((data)=>{
            result+=data;
            completed++;
            if(completed===2) {
                resolve(result);
            }
        });
    });
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */