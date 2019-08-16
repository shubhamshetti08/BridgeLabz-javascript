/********************************************************************************************************************
* @Execution : default node : cmd> primeInStack.js
* @Purpose : To perform operations specified. 
* @description : generated 1000 numbers and sent to check for primes and sent to check for anagram
                 if numbers are anagram then pushed in stack and final result is poped out.
* @overview : dataStructure 
* @author : shubham shetti <shubhamshetti08@gmail.com>
* @version : 1.0
* @since : 16-august-2019
*******************************************************************************************************************/
const ref = require('../../algorithms/primeNumbers/isPrimeBL')
const link = require('../PrimeInStack/primeInStackBL')
// for sending 1 to 1000 numbers
var clos = 1000;
var arr2 = [];
for (let j = 0; j <= clos; j++) {
    if (ref.isPrime(j)) {
        arr2.push(j);
    }
}
a1 = link.ana(arr2);


