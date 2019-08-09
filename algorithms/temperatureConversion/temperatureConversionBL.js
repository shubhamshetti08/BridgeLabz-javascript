conversion=(t,c)=>{
    if(c==1){
       
        console.log(parseInt (t * (9/5) + 32 )+'  in fahrenheit');
    }
   else if(c==2){
       console.log(parseInt ((t* 32) * (5/9))+'  in celcious' );
   }

}
module.exports={conversion};