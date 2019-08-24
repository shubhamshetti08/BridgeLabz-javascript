/********************************************************************************************************************
* @Execution : default node : cmd> sharesLinkedList.js
* @Purpose : To perform operations specified. 
* @description : this program is to read in Stock Names, Number of Share, Share Price. 
                 addshares and delete using linkedlist
                I/P -> N number of Stocks, for Each Stock Read In the Share Name, Number of Share, and Share Price
* @overview : oops concepts
* @author : shubham shetti <shubhamshetti08@gmail.com>
* @version : 1.0
* @since : 21-august-2019
*******************************************************************************************************************/
const reference = require('../SharesLinkedList/sharesLinkedListBL');
const read = require('readline-sync');
var obj = new reference();
obj.jsonParse('/home/admin1/Desktop/shubham/Oops/SharesLinkedList/sharesLinkedList.json');
var choice = ('enter 1 to buy shares or 2 to sell')
if (choice == 1) {
    var company = read.question('enter name of company');
    var numberofshares = read.question('enter numberofshares');
    var price = read.question('enter price');
    obj.addShares(company, numberofshares, price);
    obj.disp();
} else if (choice == 2) {
    var name = read.question('enter company name to delete')
    obj.deleteShares(name);
    obj.disp();
} else {
    console.log('wrong choice');
}