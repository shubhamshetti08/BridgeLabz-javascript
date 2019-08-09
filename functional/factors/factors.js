/********************************************************************************************************************
* @Execution : default node : cmd> factors.js
* @Purpose : to study the functionals working.
* @description :Computes the prime factorization of N using simple logic.
* @overview : factors of given number.
* @author : SHUBHAM A S <shubhamshetti08gmail.com>
* @version : 1.0
* @since : 07-August-2019
*******************************************************************************************************************/
let read = require('readline-sync');
let reference = require('../factors/factorsBL.js');
let num = read.question('enter number to get factors');
reference.factors(num);