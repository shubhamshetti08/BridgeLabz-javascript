/********************************************************************************************************************
* @Execution : default node : cmd> monthlyPayment.js
* @Purpose : to study the algorithms.
* @description : taking principal,rate,year from user in command argument and finding monthy payment using formulae.
* @overview : displaying monthly payment found out by formulae.
* @author : SHUBHAM A S <shubhamshetti08gmail.com>
* @version : 1.0
* @since : 10-August-2019
*******************************************************************************************************************/
const read = require('readline-sync');
const reference = require('../monthlyPayment/monthlyPaymentBL');
// taking user input in command line aurgument
let principal = process.argv[2];
let rate = process.argv[3];
let year = process.argv[4];
var payment = reference.monthlyPayment(principal, rate, year)
console.log('monthly payment is  ' + payment);