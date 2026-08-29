/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {

    // Edge Case
    if(this.length===0) {
        return -1;
    }

    // Return the last element
    var output = this[this.length-1];
    return output;
    
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */