/********************************************************************************************************************
* @Execution : default node : cmd> bubbleSortFile.js
* @Purpose : to study the algorithms.
* @description :  Reading in a list of numbers from File Then displaying sorted list of numbers using bubblesort logic.
* @overview : reading words from file displaying sorted numbers.
* @author : SHUBHAM A S <shubhamshetti08gmail.com>
* @version : 1.0
* @since : 09-August-2019
*******************************************************************************************************************/
let reference = require('../../utility/utility');
arr = reference.readFile('../files/int.txt');
reference.bubbleSortInt(arr);
