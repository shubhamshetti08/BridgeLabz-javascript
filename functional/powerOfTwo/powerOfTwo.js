/********************************************************************************************************************
* @Execution : default node : cmd>powerOfTwo.js
* @Purpose : to study the functionals working.
* @description :This program takes a command-line argument N and prints a table of the powers of 2 that are less than or equal to 2^N.
* @overview : printing power of to given range.
* @author : SHUBHAM A S <shubhamshetti08gmail.com>
* @version : 1.0
* @since : 07-August-2019
*******************************************************************************************************************/
let read=require('readline-sync');
let reference=require('../powerOfTwo/powerOfTwoBL.js');
let num=process.argv[2];
console.log(reference.powerOfTwo(num));