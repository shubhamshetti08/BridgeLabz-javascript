var input=require('readline-sync');
var util=require('../../utility/hash');
var size = input.questionInt('Enter the size of the hashsh Table');
var hash = new util(size + 1);
hash.insert(77);
hash.insert(44);
hash.insert(55);
hash.insert(26);
hash.insert(93);
hash.insert(17);
hash.insert(31);
hash.insert(20);
hash.insert(54);
// console.log('Size is ' + hash.getSize());
hash.disp();