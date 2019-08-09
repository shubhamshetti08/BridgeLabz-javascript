/********************************************************************************************************************
* @Execution : default node : cmd> couponNumbers.js
* @Purpose : to study the functionals working.
* @description :Given N distinct Coupon Numbers, how many random numbers do you need to generate distinct coupon number? This program simulates this random process.
* @overview : distinct coupon numbers
* @author : SHUBHAM A S <shubhamshetti08gmail.com>
* @version : 1.0
* @since : 07-August-2019
*******************************************************************************************************************/
let read =require('readline-sync');
let reference = require("../couponNumbers/couponNumbersBL");
let number = read.question('enter toltal no.of coupons to be picked');
reference.couponNumbers(number);