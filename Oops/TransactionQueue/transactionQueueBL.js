const fs=require('fs');
//created node class with attributes data,previous and next
class Node {
    constructor(name, numberofshares, price,time) {
        this.data = {
            "name": name,
            "numberofshares": numberofshares,
            "price": price,
            "time":time
        }
        this.next = null;
    }
}
// creared stack class with attribute front and rear
class Queue{
    constructor(){
        this.front=null;
        this.rear=null;
        this.fileName=null;
        this.content=null;
    }
    jsonParse(fileName){
        this.fileName=fileName;
        this.content=JSON.parse(fs.readFileSync(fileName));
        console.log(this.content);
    }
   isEmpty(){
       return !this.front;
   }
  /*
* @description : enqueue
* @purpose:   link each data to node at the end of queue.
* @param {data}, which has data information. 
*/
    buyShares(name, numberofshares, price,time){
        let node = new Node(name, numberofshares, price,time);
        if(this.isEmpty()){
            this.front=this.rear=node;
        }
        else{
            this.rear.next=node;
            node.pre=this.rear;
            this.rear=node;
        }
        this.print();
    }
/*
* @description : print
* @purpose:   prints data from queue.
* @param {}, which has data information. 
*/
    print(){
        if(this.isEmpty()){
            console.log('empty');
        }
        else{
            var tempArr=[];
            let temp=this.front;
            while(temp){
                tempArr.push(temp.data);
                console.log(temp.data);
                temp=temp.next;
            }
           //console.log(tempArr.data);
           
        }
       
    }
      /*
* @description : frontpop
* @purpose:   remove node with data from front of the queue.
* @param {}, which has data information. 
*/
    frontpop(){
        
        let node=this.front;
        if(!this.isEmpty()){
            this.front=this.front.next;
        }
        if(!this.front){
            this.rear=null;
        }
        //this.print();
        
        
        return node;
    }
      /*
* @description : rearpop
* @purpose:   remove node with data from front of the queue.
* @param {}, which has data information. 
*/
    rearpop(){
        
        let node=this.rear;
        if(!this.isEmpty()){
            this.rear=this.rear.pre;
        }
        if(!this.rear){
            this.front=null;
        }
        this.print();
        
        
        return node;
    }
     /*
* @description : addFront
* @purpose:   add node with data to front of the queue.
* @param {data}, which has data information. 
*/

    addFront(data){
        let node = new Node(data);
        if(this.isEmpty){
            this.front=node;
            this.rear=node
        }
        else{
            node.next=this.front;
            this.front.pre=node;
            this.front=node;


        }

    }
    save(){
        fs.writeFileSync(this.fileName,JSON.stringify(this.content));
      }

   
}
module.exports=Queue;