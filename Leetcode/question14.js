/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    var outputArray = new Array();

    for (let i=0; i<arr.length; i+=size) {
        var tempArray = new Array();
        for (let j=i; j<(i+size); j++) {
            if(j===arr.length) break;
            tempArray.push(arr[j]);
        }
        outputArray.push(tempArray);
    }

    return outputArray;
};