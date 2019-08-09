gambler=(stake,goal)=>{
    let win=0,lose=0,totalGambles=0,gamble=0;
    let winp=0,lostp=0;
    do{
    let gamble=parseInt(Math.random()*10);
   //console.log('no.of times gambled = '+gamble);
    totalGambles++;
    if(gamble==0){
        stake++;
        //console.log('yeah u have won  '+stake)
        win++;
    }
    else{
        stake--;
        //console.log('oh!!! no, u have lost  '+stake)
        lose++;
    }
    }while(!(stake==0||stake==goal));
    winp=(win/totalGambles)*100;
    lostp=(lose/totalGambles)*100;
    return [winp,lostp];
}
module.exports={gambler};