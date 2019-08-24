var events=require('events');
var util=require('util');
//var eventEmitter=new events.EventEmitter();
var student = function(name){
this.nam=name;
}

util.inherits(student,events.EventEmitter);
var max = new student('shu');
max.on('scored',function(marks){
    console.log(max.nam+'scores'+marks);
})
max.emit('scored ',95);