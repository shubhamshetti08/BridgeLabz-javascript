/********************************************************************************************************************
* @Execution : default node : cmd> replace.js
* @Purpose : to study the functionals working.
* @description :take name from user and replace it disply altered string with user name.
* @overview : ultering string by given string.
* @author : SHUBHAM A S <shubhamshetti08gmail.com>
* @version : 1.0
* @since : 06-August-2019
*******************************************************************************************************************/
var http=require("http");
http.createServer(function(req,res){
    res.status(200).send("hello world");
   // res.end("hello world");


let read=require('readline-sync');
let stringManage = require('../replaceString/replaceBL.js');
let s = "<<username>> how are you";
let name = read.question('enter username:');
if (stringManage.checkStringLen(name)) {
    console.log("pls entered name should be more than 3 chars");
}
else {
    console.log(stringManage.replaceString(s, "<<username>>", name));
}


}).listen(3000);
console.log('server http://127.0.0.1:3000/');