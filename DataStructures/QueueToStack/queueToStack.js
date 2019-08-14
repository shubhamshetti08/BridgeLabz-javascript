const reference = require('../QueueToStack/queueToStackBL');

var r=[];
reference.enqueue('a');
reference.enqueue('b');
 r=reference.dequeue();
r.forEach(element => {
    console.log(element);
    
});

