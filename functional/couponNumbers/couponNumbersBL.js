couponNumbers=(number)=>{
    let loop=0; 
    let count=0;
    let s = [];
    while(loop==0){
        let a =  (parseInt(Math.random()*10)%number);
            count++;
        if(s.includes!=true)
            s.push(a);
        if(s.length==number){
            loop=1;
        }
       // console.log(s);
    }
   console.log(count+" "+s);
}
module.exports={couponNumbers};
