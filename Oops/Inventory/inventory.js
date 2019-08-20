/********************************************************************************************************************
* @Execution : default node : cmd> inventory.js
* @Purpose : To perform operations specified. 
* @description : create jason file add inventory and read that file convert it to js objects
                 and calculate value of every inventory and total value then print values
* @overview : oops concepts
* @author : shubham shetti <shubhamshetti08@gmail.com>
* @version : 1.0
* @since : 19-august-2019
*******************************************************************************************************************/
const util= require('../../utility/inventory');
var invent=new util();
invent.jsonParse('/home/admin1/Desktop/shubham/Oops/inventorys.json');
invent.disp();
invent.value();