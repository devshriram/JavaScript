/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    var keys = Object.keys(obj);
    if(keys.length==0) {
        return true;
    }
    return false;
};