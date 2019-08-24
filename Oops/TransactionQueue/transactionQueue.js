/********************************************************************************************************************
* @Execution : default node : cmd> transactionQueue.js
* @Purpose : To perform operations specified. 
* @description : this program is to read in Stock Names, Number of Share, Share Price. 
                add shares and time of buy using queue and add time of buy display shares.
                I/P -> N number of Stocks, for Each Stock Read In the Share Name, Number of Share, and Share Price

* @overview : oops concepts
* @author : shubham shetti <shubhamshetti08@gmail.com>
* @version : 1.0
* @since : 22-august-2019
*******************************************************************************************************************/
const reference = require('../TransactionQueue/transactionQueueBL');
var obj = new reference();
obj.jsonParse('/home/admin1/Desktop/shubham/Oops/TransactionQueue/transactionQueue.json');
var time = new Date();
// obj.print();
//obj.stockAccount('bajaj');
obj.buyShares('bajaj', 'new', '10', '10', time);

//obj.sell('lic');
obj.print();
obj.save();