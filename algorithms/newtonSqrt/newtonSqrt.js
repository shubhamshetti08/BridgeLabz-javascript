/********************************************************************************************************************
* @Execution : default node : cmd> newtonSqrt.js
* @Purpose : to study the algorithms.
* @description :  taking non negative number from user finding square roots using newton's formulae.
* @overview : finding square root of number displaying results.
* @author : SHUBHAM A S <shubhamshetti08gmail.com>
* @version : 1.0
* @since : 10-August-2019
*******************************************************************************************************************/
const read = require('readline-sync');
const reference = require('../newtonSqrt/newtonSqrtBL');
var number = read.question('enter +ve number to get sqare root');
var result = reference.squareRoot(number)
console.log(result);