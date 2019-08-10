/********************************************************************************************************************
* @Execution : default node : cmd> insertionSortFile.js
* @Purpose : to study the algorithms.
* @description :  Reading in a list of words from File and displays sorted list using insertion sort logic.
* @overview : reading words from file and displaying sorted list.
* @author : SHUBHAM A S <shubhamshetti08gmail.com>
* @version : 1.0
* @since : 09-August-2019
*******************************************************************************************************************/
// connection to utility class
let reference = require('../../utility/utility');
var arr = reference.readFile('../files/temp.txt');
reference.insertionSortString(arr);