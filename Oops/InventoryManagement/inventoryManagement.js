/********************************************************************************************************************
* @Execution : default node : cmd> inventoryManagement.js
* @Purpose : To perform operations specified. 
* @description : create jason file add inventory and read that file convert it to js objects
                 and manage inventory by adding objects and save it to file.
* @overview : oops concepts
* @author : shubham shetti <shubhamshetti08@gmail.com>
* @version : 1.0
* @since : 20-august-2019
*******************************************************************************************************************/
const util = require('../../utility/inventory');
const read = require('readline-sync');
var obj = new util();
obj.jsonParse('/home/admin1/Desktop/shubham/Oops/inventorys.json');
var add = read.question('enter name of category');
//obj.value();
var add = read.question('enter name of category');
obj.addCategory(add);
var company = read.question('enter name of company');
var numberofshares = read.question('enter numberofshares');
var price = read.question('enter price');
obj.addElements(add, company, numberofshares, price);
obj.disp();
obj.saveFile();