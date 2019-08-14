class Node {
    constructor(data){
        this.data=data;
        this.next=null;
        this.pre=null;
    }
}
class Queue{
    constructor(){
        this.front=null;
        this.rear=null;
    }
   isEmpty(){
       return !this.front;
   }

    enqueue(data){
        let node = new Node(data);
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

    print(){
        if(this.isEmpty()){
            console.log('empty');
        }
        else{
            var tempArr=[];
            let temp=this.front;
            while(temp){
                tempArr.push(temp.data);
                temp=temp.next;
            }
           console.log(tempArr.join(','));
           
        }
       
    }
    frontpop(){
        
        let node=this.front;
        if(!this.isEmpty()){
            this.front=this.front.next;
        }
        if(!this.front){
            this.rear=null;
        }
        this.print();
        
        
        return node;
    }
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

    addFront(data){
        let node = new Node(data);
        if(this.isEmpty){
            this.front=node;
        }
        else{
            this.front=node;

        }

    }
    palindrome(){
        while(this.front!=this.rear){
            if(this.front.data!=this.rear.data){
                console.log('string is not palindrome');
                break;
            }
            else{
                this.frontpop();
                this.rearpop();
            }
        }
        if(this.front==this.rear||!this.front){
            console.log('string is palindrome');
        }
    }
}
module.exports=Queue;