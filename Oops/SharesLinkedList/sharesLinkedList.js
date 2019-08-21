const reference=require('../SharesLinkedList/sharesLinkedListBL');
var obj = new reference();
obj.jsonParse('/home/admin1/Desktop/shubham/Oops/SharesLinkedList/sharesLinkedList.json');
obj.addShares('p','10','100');
obj.addShares('z','10','100');
obj.addShares('q','10','100');
obj.addShares('r','10','100');
obj.deleteShares('p');
obj.disp();