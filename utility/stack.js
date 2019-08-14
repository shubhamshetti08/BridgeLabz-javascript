class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
    }
    push(data){
        let newNode = new Node(data);
        if (!this.head) {
           this.head = newNode;
            return this.head;
        }
        let tail = this.head;
        while (tail.next !== null) {
            tail = tail.next;
        }
        tail.next = newNode;
        return this.head;

    }



    pop(data){
        if (!this.head) {
            return null;
        }
        if (!this.head.next) {
           this.head.next = null;
            return;
        }
        let prev = this.head;
        let tail = this.head.next
        while (tail.next !== null) {
            prev = tail;
            tail = tail.next;
        }
        prev.next = null;
        return this.head;
    }
        
       
                  
            disp() {
                var arr=[];
                this.temp = this.head
                while (this.temp != null) {
                    arr.push(this.temp.data);
                console.log(this.temp.data)
                this.temp = this.temp.next

                }
                return arr;
                // console.log(this.temp.data)
                
                }
                /*
                * @description:sort data to linkedlist
                * @purpose: sort the data in linked list in ascending order
                */
                sortData() {
                if (this.head == null) {
                console.log("empty");
                return;
                } else {
                this.temp = this.head;
                while (this.temp !== null) {
                this.current = this.temp.next;
                while (this.current !== null) {
                if ((this.temp.data) > (this.current.data)) {
                this.temp1 = this.temp.data;
                this.temp.data = this.current.data;
                this.current.data = this.temp1;
                }
                this.current = this.current.next;
                }
                this.temp = this.temp.next;
                }
                
                }
                }
                /*
                * @description:search data in linkedlist
                * @purpose: search the data in the linked list if it is present it is derefered from the linkedList else it is added to the linkedList
                * @param {data}, which has the information about data from user which has to be deleted or added accordingly
                */
                search(key) {
                this.temp = this.head;
                while (this.temp != null) {
                if (this.temp.data == key) {
                console.log("key found");
                console.log(key, " Deleted from list");
                this.remove(key);
                //this.sortData()
                this.disp()
                //if (this.temp != null)
                //this.sortData();
                return;
                }
                this.temp = this.temp.next;
                }
                if (this.temp == null) {
                console.log("key not found");
                this.add(key);
                //this.sortData()
                this.disp()
                }
                }
                getArray() {
                if (this.head == null)
                return
                let ar = []
                this.temp = this.head
                while (this.temp != null) {
                ar.push(this.temp.data)
                this.temp = this.temp.next
                }
                return ar
                }
                
    }


module.exports=Stack;