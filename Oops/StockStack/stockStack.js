/********************************************************************************************************************
* @Execution : default node : cmd> stockStack.js
* @Purpose : To perform operations specified. 
* @description : this program is to read in Stock Names, Number of Share, Share Price. 
                add shares and sell shares using stack and display shares.
                I/P -> N number of Stocks, for Each Stock Read In the Share Name, Number of Share, and Share Price

* @overview : oops concepts
* @author : shubham shetti <shubhamshetti08@gmail.com>
* @version : 1.0
* @since : 22-august-2019
*******************************************************************************************************************/
const read= require('readline-sync');
const reference = require('../StockStack/stockStackBL');
var obj = new reference();
var choice=('enter 1 to buy shares or 2 to sell')
if(choice==1){
var company = read.question('enter name of company');
var numberofshares = read.question('enter numberofshares');
var price = read.question('enter price');
obj.buy(company,numberofshares,price);
obj.disp();
}else if(choice==2){
var name=read.question('enter company name to sell');
obj.sell(name);
obj.disp();
}else{
    console.log('wrong choice');
}