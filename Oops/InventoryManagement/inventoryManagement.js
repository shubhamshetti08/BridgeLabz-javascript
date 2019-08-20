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
const util=require('../../utility/inventory');
var obj=new util();
obj.jsonParse('/home/admin1/Desktop/shubham/Oops/inventorys.json');

//obj.value();
obj.addCategory("biscuits");
obj.addElements("biscuits","parle G","1","5");
obj.disp();
obj.saveFile();