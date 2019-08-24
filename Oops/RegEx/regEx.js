/********************************************************************************************************************
* @Execution : default node : cmd> regex.js
* @Purpose : To perform operations specified. 
* @description : Read in the following message: Hello <<name>>, We have your full name as <<full name>> in our system. 
                 your contact number is 91-xxxxxxxxxx. Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016.
                 Use Regex to replace name, full name, Mobile#, and Date with proper value.
* @overview : oops concepts
* @author : shubham shetti <shubhamshetti08@gmail.com>
* @version : 1.0
* @since : 19-august-2019
*******************************************************************************************************************/
const read = require('readline-sync');
const reference = require('../RegEx/regExBL');
var obj = new reference();
var string = 'Hello <<name>>, We have your full name as <<full name>> in our system. your contact number is 91-xxxxxxxxxx. Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016'
var fullName = read.question('enter full name');
obj.setFullName = fullName;
obj.checkFullName();
var phoneNumber = read.question('enter 10 digit phone number');
obj.setPhone = phoneNumber;
obj.checkPhoneNumber();
let name = obj.getFirstName;
//console.log(name);
var d = obj.toDay;
//console.log(d);


//let date=obj.dateFormat.exec(string);
//console.log(date)
console.log(string.replace('<<name>>', name).replace('<<full name>>', fullName).replace('91-xxxxxxxxxx', phoneNumber).replace(obj.dateFormat, d));