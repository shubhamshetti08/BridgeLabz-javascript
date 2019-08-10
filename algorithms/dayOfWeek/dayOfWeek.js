/********************************************************************************************************************
* @Execution : default node : cmd> dayOfWeek.js
* @Purpose : to study the algorithms.
* @description : this program  take three command-line arguments: m (month), d (day), and y (year). For m use 1 for January, 2 for February, and so forth. For output printing which day is that . 
* @overview : displaying name of the day of given date.
* @author : SHUBHAM A S <shubhamshetti08gmail.com>
* @version : 1.0
* @since : 08-August-2019
*******************************************************************************************************************/
let read = require('readline-sync');
let reference = require('../dayOfWeek/dayOfWeekBL.js')
//console.log('plz enter day in format  <day month year>')
// taking user input from command line aurgument
let d = parseInt(process.argv[2]);
let m = parseInt(process.argv[3]);
let y = parseInt(process.argv[4]);
var result = reference.dayOfWeek(d, m, y);
var s = ['sun', 'mon', 'tue', 'wen', 'thu', 'fri', 'sat'];
for (let i = 0; i < s.length; i++) {
    if (result == i) {
        //printing day
        console.log('day is   ' + s[i]);
    }
}