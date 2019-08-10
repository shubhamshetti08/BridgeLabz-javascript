/********************************************************************************************************************
* @Execution : default node : cmd> binarySearchFile.js
* @Purpose : to study the algorithms.
* @description :  Reading in a list of words from File Then taking key from user to search  the list. The program reports if the search word is found in the list.
* @overview : reading words from file search for key if found displaying results.
* @author : SHUBHAM A S <shubhamshetti08gmail.com>
* @version : 1.0
* @since : 09-August-2019
*******************************************************************************************************************/
let read = require('readline-sync');
const reference = require('../../utility/utility');
//read string from file
var arr = reference.readFile('../files/temp.txt');
let string = read.question('enter string to search  ');
// joining array and sending to functoin
reference.binarySearchString(arr.join(' '), string);






