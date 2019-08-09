/********************************************************************************************************************
* @Execution : default node : cmd> gambler.js
* @Purpose : to study the functionals working.
* @description :Simulates a gambler who start with stake and place fair $1 bets until he/she  has no money or reach $goal. Keeps track of the number of times he/she wins and the number of bets he/she makes. Run the experiment N times, averages the results, and prints them out.
* @overview : gambling game until user win or lose.
* @author : SHUBHAM A S <shubhamshetti08gmail.com>
* @version : 1.0
* @since : 07-August-2019
*******************************************************************************************************************/
let read =require('readline-sync');
let reference = require('../gambler/gamblerBL.js')
let stake=read.question('enter stake  ');
if(stake<=0){
    console.log('stake should be greater than 0');
    stake=read.question('enter stake  ');
}
let goal =read.question('enter goal  ');
if(goal<stake){
    console.log('goal should be greater than stake');
    goal=read.question('enter goal  ');
}
let result=reference.gambler(stake,goal);
console.log('win ='+result[0]+'%'+'  lost ='+result[1]+'%');
