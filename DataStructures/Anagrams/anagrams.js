/********************************************************************************************************************
* @Execution : default node : cmd> anagrams.js
* @Purpose : To perform operations specified. 
* @description : first find the primes in range 1 to 1000 and stored in 2d array then checked for
                  anagrams and printed prime numbers which are anagrams
* @overview : dataStructure 
* @author : shubham shetti <shubhamshetti08@gmail.com>
* @version : 1.0
* @since : 16-august-2019
*******************************************************************************************************************/
const ref = require('../../algorithms/primeNumbers/isPrimeBL')
const link = require('../Anagrams/anagramsBL')
var rows = 10;
var clos = 100;
var arr = [];

for (let i = 1; i <= rows; i++) {
    var arr2 = [];
    //sending (1-100)numbers for 1st row and (100-200) for 2nd ......till 1000
    for (let j = (i - 1) * clos; j <= i * clos; j++) {
        if (ref.isPrime(j)) {
            arr2.push(j);
        }
    } a1 = link.anagrams(arr2);

    arr.push(a1);
}
//console.log(arr);
