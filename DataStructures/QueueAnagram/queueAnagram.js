/********************************************************************************************************************
* @Execution : default node : cmd> queueAnagram.js
* @Purpose : To perform operations specified. 
* @description : 
* @overview : dataStructure 
* @author : shubham shetti <shubhamshetti08@gmail.com>
* @version : 1.0
* @since : 16-august-2019
*******************************************************************************************************************/
const ref = require('../../algorithms/primeNumbers/isPrimeBL')
const link = require('../QueueAnagram/queueAnagramBL')
// for sending 1 to 1000 numbers
var clos = 1000;
var arr2 = [];
for (let j = 0; j <= clos; j++) {
    if (ref.isPrime(j)) {
        arr2.push(j);
    }
}
a1 = link.ana(arr2);


