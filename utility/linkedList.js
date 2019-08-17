class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    /*
* @description :  insertAtEnd
* @purpose:   link each data to node at the end of linked list
* @param {data}, which has data information. 
*/
    insertAtEnd(data) {
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


    /*----------------------------------------------*/
    //     let newNode = new Node(data)
    // if (this.head == null) {
    //     this.head = newNode
    //     return;
    //     } 
    //     else {
    //     this.temp = this.head;

    //     while (this.temp.next != null) {
    //     this.temp = this.temp.next

    //     }
    //     this.temp.next = newNode
    // return true;
    // }
    //     }

    // printList(){
    //     var current = this.head;
    //     var string = "";
    //     while (current) {
    //         string += current.element + " ";
    //         current = current.next;
    //     }
    //     console.log(string);
    // }
    /*
    * @description :  deleteAtEnd
    * @purpose:   delete each data to node at the end of linked list
    * @param {data}, which has data information. 
    */
    deleteAtEnd(data) {
        // head is null
        if (!this.head) {
            return null;
        }
        if (!this.head.next) {
            this.head = null;
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

    /*------------------------------------------------------*/
    // if (this.head == null) {
    //     console.log("empty")
    //     return
    //     }
    //     this.current = this.head;
    //     this.temp = this.head.next;
    //     while (this.temp != null && this.temp.data != data) {
    //     this.current = this.temp;
    //     this.temp = this.temp.next;
    //     }

    //     if (this.temp.data == data)
    //     this.current.next = this.temp.next;
    //     }

    /*
* @description :  disp
* @purpose:  display every data of linked list
* @param {}, which has data information. 
*/
    disp() {
        var arr = [];
        this.temp = this.head
        while (this.temp != null) {
            arr.push(this.temp.data);
           // console.log(this.temp.data)
            this.temp = this.temp.next

        }
        // console.log(this.temp.data)
        return arr;
        

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
                this.deleteAtEnd(key);
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
            console.log(key,' is inserted');
            this.insertAtEnd(key);
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


module.exports = LinkedList;