/********************************************************************************************************************
* @Execution : default node : cmd> primeNumbers.js
* @Purpose : To perform operations specified. 
* @description : first take range of numbers 1 to 1000 and send it to find primes and stored in 2d array
                 (1-100),(100-200).... in every row up to 1000.
* @overview : dataStructure 
* @author : shubham shetti <shubhamshetti08@gmail.com>
* @version : 1.0
* @since : 16-august-2019
*******************************************************************************************************************/
const ref = require('../../algorithms/primeNumbers/isPrimeBL')
// limiting rows
var rows = 10;
var clos = 1000;
var arr = [];
try {
    for (let i = 1; i <= rows; i++) {
        var arr2 = [];
        str = "";
         //for(j=1;j<=clos;j++){
        //sending (1-100)numbers for 1st row and (100-200) for 2nd ......till 1000
        for (let j = (i - 1) * clos; j <= i * clos; j++) {
            if (ref.isPrime(j)) {
                arr2.push(j);
                //converting in string
                //str = str + " " + j;
            }
        }

        arr.push(arr2);
    }
} catch (e) {
    console.log(e);
}
console.log(arr);
