//created node class with attributes data and next
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
// creared stack class with attribute top
class Stack {
    constructor() {
        this.top = null;
    }
    isEmpty() {
        return this.top == null;
    }
    /*
   * @description :  push
   * @purpose:   to add node contain data to stack.
   * @param {data}, which has data information. 
   */
    push(data) {
        let newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
    }

    /*
   * @description : pop
   * @purpose:   to remove node contain data from stack.
   * @param {}, which has data information. 
   */
    pop() {

        if (!this.top) return this.top;
        else {
            let temp = this.top;
            this.top = this.top.next;
            return temp.data;
        }
    }




    /*
  * @description : disp
  * @purpose:   to display node contain data from stack.
  * @param {}, which has data information. 
  */

    disp() {
        var arr = [];
        this.temp = this.top
        while (this.temp != null) {
            arr.push(this.temp.data);
            console.log(this.temp.data)
            this.temp = this.temp.next

        }
        return arr;
        // console.log(this.temp.data)

    }

}

module.exports = Stack;