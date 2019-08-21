const fs = require('fs');
class Node {
    constructor(name, numberofshares, price) {
        this.data = {
            "name": name,
            "numberofshares": numberofshares,
            "price": price
        }
        this.next = null;
    }
}
module.exports = class LinkedList {
    constructor() {
        this.head = null;
        this.content = null;
        this.fileName = null;
    }
    jsonParse(fileName) {
        this.fileName = fileName;
        this.content = JSON.parse(fs.readFileSync(fileName));
    }
    addShares(name, numberofshares, price) {
        var newNode = new Node(name, numberofshares, price);
        if (!this.head) {
            this.head = newNode;
            return this.head;
        } else {
            let tail = this.head;
            while (tail.next != null) {
                tail = tail.next;
            }

            tail.next = newNode;
            return this.head;
        }
    }
    deleteShares(key) {
        if (this.head.data.name == key) {
            this.head = this.head.next;
        } else {
            this.temp = this.head;
            while (this.temp != null) {
                if (this.temp.data.name == key) {
                    break;
                }
                this.current = this.temp;
                this.temp = this.temp.next;
            }
            this.current.next = this.temp.next;
        }
    }
    disp() {
        var arr = [];
        this.temp = this.head
        while (this.temp != null) {
            arr.push(this.temp.data);
            console.log(this.temp.data)
            this.temp = this.temp.next

        }
        // console.log(this.temp.data)
        return arr;


    }
}