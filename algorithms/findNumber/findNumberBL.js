var read = require('readline-sync');

findNumber=(number,start,mid,end)=>{
    while(start<=end){
        if(start==end){
        console.log('the number is '+start);
        break;
    }
console.log(start+'---'+mid+" true"+'  '+(mid+1)+'---'+end+' false');
var enter = read.question('enter true or false');

if(enter==false){
    end=mid;
}
else{
    start=mid+1;
}
mid=(start+end)/2;


}
}
module.exports={findNumber};