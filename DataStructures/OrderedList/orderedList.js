/********************************************************************************************************************
* @Execution : default node : cmd> primeNumbers.js
* @Purpose : To perform operations specified. 
* @description :Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. 
                Store the prime numbers in a 2D Array, the first dimension represents the range 0-100, 100-200, and so on.
                While the second dimension represents the prime numbers in that range

* @overview : dataStructure 
* @author : shubham shetti <shubhamshetti08@gmail.com>
* @version : 1.0
* @since : 14-august-2019
*******************************************************************************************************************/
const util = require('../../utility/utility');
var file=util.readFile('file.txt');
const reference = require('../OrderedList/orderedListBL');
reference.orderedList(file.join(' '));
