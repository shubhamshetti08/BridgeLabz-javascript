powerOfTwo=(num)=>{
let result= 1;
let i=1;
while(i<=num){
    result=result*2;
    i++;
}
return result;

}
module.exports={powerOfTwo};
