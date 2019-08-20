/********************************************************************************************************************
* @Execution : default node : cmd> parentheses.js
* @Purpose : To perform operations specified. 
* @description : Read data in the form of expressions from a user input file and ckecks for parentheses if bracers are in correct format
                then prints balaced parentheses or not.
* @overview : dataStructure 
* @author : shubham shetti <shubhamshetti08@gmail.com>
* @version : 1.0
* @since : 13-august-2019
*******************************************************************************************************************/
const util = require('../BalancedParentheses/parenthesesBL');

// read from user
const read = require('readline-sync');
var exp = read.question('enter arithmetic expression   ');
//var count = 0;
console.log(exp);
// to split expression
let a = exp.split('');
console.log(a);
util.parentheses(a);
