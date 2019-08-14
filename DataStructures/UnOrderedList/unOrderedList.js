
/********************************************************************************************************************
* @Execution : default node : cmd> unOrderdList.js
* @Purpose : To perform operations specified. 
* @description : Read data in the form of numbers from a file  in a Linked List. 
* Take user input for a number, if found then pop the number out of the list else insert the number in appropriate position
* @overview : dataStructure 
* @author : shubham shetti <shubhamshetti08@gmail.com>
* @version : 1.0
* @since : 13-august-2019
*******************************************************************************************************************/

//link to unOrderedListBL
const reference = require('../UnOrderedList/unOrderedListBL');
const util=require('../../utility/utility');
var file=util.readFile('file.txt');
//var key = read.question('enter word to search');
console.log(file.join(' '));
reference.unOrderedList(file.join( ' '));
