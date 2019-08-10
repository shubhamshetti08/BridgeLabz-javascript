/********************************************************************************************************************
* @Execution : default node : cmd> trmperatureConversion.js
* @Purpose : to study the algorithms.
* @description : this program takes user input and give choice to enter temperature in 0C or 0F and displays result in vice versa. 
* @overview : this program displays converted temperature. 
* @author : SHUBHAM A S <shubhamshetti08gmail.com>
* @version : 1.0
* @since : 08-August-2019
*******************************************************************************************************************/

let read = require('readline-sync');
let reference = require('../temperatureConversion/temperatureConversionBL.js')
let choice = read.question('enter 1 to write in celcious or 2 to farhenheit');
let temperature = read.question('enter temperature');
// choice given to user
if (choice == 1) {
    reference.conversion(temperature, 1);
}
else if (choice == 2) {
    reference.conversion(temperature, 2);
}