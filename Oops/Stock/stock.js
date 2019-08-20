/********************************************************************************************************************
* @Execution : default node : cmd> stock.js
* @Purpose : To perform operations specified. 
* @description : this program is to read in Stock Names, Number of Share, Share Price. 
                Print a Stock Report with total value of each Stock and the total value of Stock.
                I/P -> N number of Stocks, for Each Stock Read In the Share Name, Number of Share, and Share Price

* @overview : oops concepts
* @author : shubham shetti <shubhamshetti08@gmail.com>
* @version : 1.0
* @since : 20-august-2019
*******************************************************************************************************************/
const util = require('../Stock/stockBL');
var obj = new util();
obj.jsonParse('/home/admin1/Desktop/shubham/Oops/stock.json')
obj.value();
//obj.disp();