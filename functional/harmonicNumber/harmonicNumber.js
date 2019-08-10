/********************************************************************************************************************
* @Execution : default node : cmd>harmonicNumber.js
* @Purpose : to study the functionals working.
* @description :Prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N using this formulae.
* @overview : printing harmonic number to given range.
* @author : SHUBHAM A S <shubhamshetti08gmail.com>
* @version : 1.0
* @since : 07-August-2019
*******************************************************************************************************************/
//readline sync
let read = require('readline-sync');
let reference = require('../harmonicNumber/harmonicNumberBL');
let num = read.question('enter range to print harmonic number');
console.log(reference.harmonicNumber(num));