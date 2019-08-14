/********************************************************************************************************************
* @Execution : default node : cmd> cashCounter.js
* @Purpose : To perform operations specified. 
* @description : read limit of people from user then create queue of people them ask choice to deposite
                  or withdraw if they want to withdraw more than available balance then ll tell him
                  to take less available  money of work done ll dequeue line.
* @overview : dataStructure 
* @author : shubham shetti <shubhamshetti08@gmail.com>
* @version : 1.0
* @since : 14-august-2019
*******************************************************************************************************************/

const reference = require('../CashCounter/cashCounterBL')
const read = require('readline-sync');
var amount = parseInt(10);
var limit = read.question('enter limit of people');
reference.cashCounter(amount, limit);

