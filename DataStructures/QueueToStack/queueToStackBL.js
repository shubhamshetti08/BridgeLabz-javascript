const util=require('../../utility/stack')
var stack1=[];
var stack2=[];
var obj = new util();
exports.enqueue=(data)=>{
    stack1.push(data);
}

exports.dequeue=()=>{
    if(stack2.length===0){
        if(stack1.length===0){
            return "cannot dequeue bcs stake1 is empty"
        }
        while(stack1.length>0){
            var p=stack1.pop();
            stack2.push(p);
        }
    }
    return stack2.pop();

}
