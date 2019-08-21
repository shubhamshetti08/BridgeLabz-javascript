const reference=require('../StockAccount/stockAccountBL');
var obj=new reference();
obj.jsonParse('/home/admin1/Desktop/shubham/Oops/stock.json');
var time=new Date();

obj.stockAccount('lic');
obj.buyShares('lic','old','10','10',time);

//obj.sell('lic');
obj.printReport();
obj.save();