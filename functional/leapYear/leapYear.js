/********************************************************************************************************************
* @Execution : default node : cmd>harmonicNumber.js
* @Purpose : to study the functionals working.
* @description :finding given (correct format)year(using regex) is leap year or not .
* @overview : displaying give year is leap year or not.
* @author : SHUBHAM A S <shubhamshetti08gmail.com>
* @version : 1.0
* @since : 06-August-2019
*******************************************************************************************************************/
let read=require('readline-sync');
let stringManage=require('../leapYear/leapYearBL.js');
let year = read.question('Enter year');
if(year.match("^/d[0-9]{4}$")){
let result=stringManage.leapYear(year);
if(result==true){
    console.log(year+'is leap year');
}
    else{
        console.log(year+'is not leap year');
    }

}
else{
    console.log('enter correct format');
}
