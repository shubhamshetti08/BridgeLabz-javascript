
const util = require('../../utility/queue');
const read = require('readline-sync');
var string = read.question('Enter word');
console.log(string);
//var newString=[];
var obj = new util();
splitString = string.split('');
for (let i = 0; i < string.length; i++) {
    obj.enqueue(splitString[i]);
}
obj.palindrome();