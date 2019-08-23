var deck= new Array();
module.exports.deckOfCard=(suits,values)=>{
   
    for(let i=0;i<suits.length;i++){
        for(let j=0;j<values.length;j++){
            //var card={value:values[j],suit:suits[i]};
            deck.push(values[j]+" "+suits[i]);
        }
    }
return (deck);
}
module.exports.shuffle=()=>{
    // for(let i=0;i<100;i++){
    //     var pos1=Math.floor(Math.random()*deck.length);
    //     var pos2=Math.floor(Math.random()*deck.length);
    //     var t=deck[pos1];
    //     deck[pos1]=deck[pos2];
    //     deck[pos2]=t;
    // }
    deck.sort(()=>Math.random());
console.log(deck);
   
}