/********************************************************************************************************************
* @Execution : default node : cmd> vendingMachine.js
* @Purpose : to study the algorithms.
* @description :  taking number(amount) from user to get change dividing amount by relative notes(number) 
                   displaying correct changes of notes to that given note.
* @overview : taking input to vending machine giving correct change to customer.
* @author : SHUBHAM A S <shubhamshetti08gmail.com>
* @version : 1.0
* @since : 10-August-2019
*******************************************************************************************************************/
let read = require('readline-sync');
let reference = require('../vendingMachine/vendingMachinBL.js');
var amount = read.question('enter amount');
reference.vendingMachine(amount);