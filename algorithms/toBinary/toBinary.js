/********************************************************************************************************************
* @Execution : default node : cmd> toBinary.js
* @Purpose : to study the algorithms.
* @description :  taking decimal number from user converting it into binary by modulo and storing reminders and displayed.
* @overview : finding reminders displaying binary number.
* @author : SHUBHAM A S <shubhamshetti08gmail.com>
* @version : 1.0
* @since : 10-August-2019
*******************************************************************************************************************/
const read = require('readline-sync');
const reference = require('../toBinary/toBinaryBL');
var number = read.question('enter decimal number to convert into binary');
var result = reference.toBinary(number);
// for printing exact 4 digits
console.log('binary is' + result.padStart(4, '0'));
