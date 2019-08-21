const fs = require('fs');
//created node class with attributes data and next
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
// creared stack class with attribute top
class Stack {
    constructor() {
        this.top = null;
        this.content = null;
        this.fileName = null;
    }
    jsonParse(fileName) {
        this.fileName = fileName;
        this.content = JSON.parse(fs.readFileSync(fileName));

    }
    isEmpty() {
        return this.top == null;
    }
    /*
     * @description :  buy
     * @purpose:   to add node contain data to stack.
     * @param {data}, which has data information. 
     */
    buy(name, numberofshares, price) {
        let newNode = new Node(name, numberofshares, price);
        newNode.next = this.top;
        this.top = newNode;

    }
    /*
     * @description : disp
     * @purpose:   to display node contain data from stack.
     * @param {}, which has data information. 
     */

    disp() {
        this.temp = this.top
        while (this.temp != null) {
            arr.push(this.temp.data);
            console.log(this.temp.data)
            this.temp = this.temp.next
        }
    }
    /*
     * @description : sell
     * @purpose:   to remove node contain user specified data from stack.
     * @param {}, which has data information. 
     */

    sell(key) {
        if (this.top.data.name == key) {
            this.top = this.top.next;
        } else {
            this.temp = this.top;
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
}

module.exports = Stack;