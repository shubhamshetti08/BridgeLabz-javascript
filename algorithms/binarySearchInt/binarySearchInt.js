/********************************************************************************************************************
* @Execution : default node : cmd> binarySearchInt.js
* @Purpose : to study the algorithms.
* @description :  Reading in a list of words from File Then taking key from user to search  the list. The program reports if the search word is found in the list.
* @overview : reading words from file search for key if found displaying results.
* @author : SHUBHAM A S <shubhamshetti08gmail.com>
* @version : 1.0
* @since : 09-August-2019
*******************************************************************************************************************/
let read = require('readline-sync');
let reference = require('/home/admin1/Desktop/shubham/utility/utility.js');
var key = read.question('enter number to search  ');
var arr = [2, 4, 5, 6, 1, 89, 87, 98, -1, -3];
var result = reference.binarySearchInt(arr.sort(), key);
