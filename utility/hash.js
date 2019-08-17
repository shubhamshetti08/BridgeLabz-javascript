var input = require('readline-sync');
class Node {
constructor(data) {
this.data = data;
this.next = null;
}
}
class Hash {
constructor(l) {
this.table = [];
this.table.length = l;
this.size = 0;
}
position(x, s) {
var rem = x % s;
return rem;
}
insert(value) {
this.size++;
var newNode = new Node(value);
var pos = this.position(value, this.table.length);
var temp = this.table[pos];
if (this.table[pos] == null) {
this.table[pos] = newNode;
return true;
}
else {
while (temp.next != null) {
temp = temp.next;
}
temp.next = newNode;
return true;
}
}
disp() {
for (let i = 0; i < this.table.length; i++) {
let st = 'position ' + i + ' : ';
var b = this.table[i];
let c = 0;
while (b != null) {
if (c == 0) {
st = st + '   ';
c = 1;
}
st = st + b.data;
if (b.next != null)
st = st + '   ';

b = b.next;
}
console.log(st);
}
}
getSize() {
return this.size;
}
}
module.exports = Hash;