/********************************************************************************************************************
* @Execution : default node : cmd> flipCoin.js
* @Purpose : to study the functionals working.
* @description :fliping coin given times using random function and printing 5 of head and tails we got.
* @overview : flip a coin no.of times to get head and tails.
* @author : SHUBHAM A S <shubhamshetti08gmail.com>
* @version : 1.0
* @since : 06-August-2019
*******************************************************************************************************************/
let read=require('readline-sync');
let stringManage=require('../flipCoin/flipCoinBL.js');
let number = read.question('Enter no.of times to flip coin');
let x=stringManage.flip(number);
console.log(x[0],x[1]);