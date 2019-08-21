const reference=require('../TransactionQueue/transactionQueueBL');
var obj=new reference();
obj.jsonParse('/home/admin1/Desktop/shubham/Oops/TransactionQueue/transactionQueue.json');
var time=new Date();
// obj.print();
//obj.stockAccount('bajaj');
obj.buyShares('bajaj','new','10','10',time);

//obj.sell('lic');
obj.print();
obj.save();