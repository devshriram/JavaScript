/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {

    var tempArray = new Array();

    for (let i=0; i<arr.length; i++) {
        let temp = fn(arr[i], i);
         if(Boolean(temp)===true) {
            tempArray.push(arr[i]);
         }
    }
    return tempArray;
};