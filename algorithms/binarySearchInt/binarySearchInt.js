let read = require('readline-sync');
let reference = require('/home/admin1/Desktop/shubham/utility/utility.js');
var key = read.question('enter number to search  ');
var arr=[2,4,5,6,1,89,87,98,-1,-3];
var result=reference.binarySearchInt(arr.sort(),key);
