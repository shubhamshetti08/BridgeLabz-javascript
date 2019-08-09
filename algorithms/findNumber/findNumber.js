let read = require('readline-sync');
let reference =require('../findNumber/findNumberBL.js');
var number = parseInt(process.argv[2]);
var start=0;
var end=number;
var mid=(start+end)/2;
reference.findNumber(number,start,mid,end)