leapYear=(y)=>{
let flag=false;
    if(y%400==0){
      flag= true;
    }
    else if(y%100==0){
        flag= false;
    }
    if(y%4==0){
        flag= true;
    }
    else{
        flag=false;
    }
    return flag;
}
module.exports={leapYear};