const reference = require('../StockStack/stockStackBL');
var obj=new reference();
obj.buy('s','10','100');
obj.buy('x','10','1000');
obj.buy('y','10','1990')
obj.sell('y');
obj.disp();