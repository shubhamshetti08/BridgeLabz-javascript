/********************************************************************************************************************
* @Execution : default node : cmd> cashCounter.js
* @Purpose : To perform operations specified. 
* @description : read a set of numbers from a file and take user input to search a number
                 Firstly store the numbers in the Slot. Since there are 10 Numbers divide each number by 11 
                 and the reminder put in the appropriate slot. Create a Chain for each Slot to avoid Collision. 
                 If a number searched is found then pop it or else push it. Use Map of Slot Numbers 
                 and Ordered LinkedList to solve the problem. In the Figure Below, 
                 you can see number 77/11 reminder is 0 hence sits in the 0 slot while 26/11 remainder is 4 hence sits in slot 4

* @overview : dataStructure 
* @author : shubham shetti <shubhamshetti08@gmail.com>
* @version : 1.0
* @since : 14-august-2019
*******************************************************************************************************************/
const read = require('readline-sync');

const file = require('../../utility/utility');
const linkedlist = require('../../utility/linkedList');
var obj = [];
var a = [];
for (let i = 0; i <= 10; i++) {
    obj[i] = new linkedlist();
}
file.readFile('../files/int.txt').forEach(element => {
    var key = parseInt(element % 11);
    obj[key].insertAtEnd(element);
});

obj.forEach((element) => {
    console.log(element.disp());
});

var number = read.question('enter number to search');
var key1 = parseInt(number % 11);
if (obj[key1].search(number)) obj[key1].deleteAtEnd(number);
else obj[key1].insertAtEnd(number);
obj.forEach((element) => {
    a = a.concat(element.disp());
});
console.log(a);
file.writeFile('../files/write.txt', a);
