class Calculator {
    
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.value = value;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
        this.value = this.value + value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        this.value = this.value - value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this. value = this.value * value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        // Edge Case
        if(value===0) {
            throw new Error("Division by zero is not allowed");
        }
        this.value = this.value / value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
       
       // Edge Case - 1
       if(value===0) {
        this.value = 1;
        return this;
       }

       // Calculate Power
       var i = 1;
       var output = 1;
       var temp = this.value;
       while(i<=Math.abs(value)) {
        this.value = this.value*output;
        output = temp;
        i++;
       }

       // Handle +ve and -ve value
       if(value>0) {
        this.value = this.value
       } else {
        this.value = 1/this.value;
       }
       return this;
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        return this.value;
    }
}