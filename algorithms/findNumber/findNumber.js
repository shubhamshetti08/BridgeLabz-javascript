/********************************************************************************************************************
* @Execution : default node : cmd> findNumber.js
* @Purpose : to study the algorithms.
* @description :   takes a command-line argument N, asks you to think of a number between 0 and N-1, where N and always guesses the answer with n questions.
                   the Number N and then recursively ask true/false if the number is between a high and low value
                   logic Used Binary Search 
* @overview : guessing numbers with true and false finally displaying correct number.
* @author : SHUBHAM A S <shubhamshetti08gmail.com>
* @version : 1.0
* @since : 09-August-2019
*******************************************************************************************************************/
let read = require('readline-sync');
let reference = require('../findNumber/findNumberBL.js');
// taking user input from command line aurgument
var number = parseInt(process.argv[2]);
var start = 1;
var end = number;
// assigning mid index
var mid = parseInt((start + end) / 2);
reference.findNumber( start, mid, end)