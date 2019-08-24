var deck = new Array();
/*
 * @description :  deckOfCard
 * @purpose:   it accepts suits and values and creating deck of cards using array
 * @param {data}, which has data information. 
 */
module.exports.deckOfCard = (suits, values) => {

    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            //var card={value:values[j],suit:suits[i]};
            deck.push(values[j] + " " + suits[i]);
        }
    }
    return (deck);
}
/*
 * @description : shuffle
 * @purpose:   it shuffles deck of cards using sort and random .
 * @param {data}, which has data information. 
 */
module.exports.shuffle = () => {
    // for(let i=0;i<100;i++){
    //     var pos1=Math.floor(Math.random()*deck.length);
    //     var pos2=Math.floor(Math.random()*deck.length);
    //     var t=deck[pos1];
    //     deck[pos1]=deck[pos2];
    //     deck[pos2]=t;
    // }
    deck.sort(() => Math.random());
    console.log(deck);

}