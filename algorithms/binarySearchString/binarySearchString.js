/********************************************************************************************************************
* @Execution : default node : cmd> binarySearchInt.js
* @Purpose : to study the algorithms.
* @description : taking word(key) from user to search in the list using binary search logic 
                 if given word found in list then display the position of word.
* @overview : reading word(key) from user, search for key if found displaying results.
* @author : SHUBHAM A S <shubhamshetti08gmail.com>
* @version : 1.0
* @since : 09-August-2019
*******************************************************************************************************************/
let read = require('readline-sync');
let reference = require('/home/admin1/Desktop/shubham/utility/utility.js');
var key = read.question('enterthe word to search  ');
var s = 'hi hello how are you';
reference.binarySearchString(s, key);