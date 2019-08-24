var rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
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
    //console.log(deck);

}
/*
 * @description : distributeInQueue
 * @purpose:   it distribute created deck of cards using queue.
 * @param {data}, which has data information. 
 */
module.exports.distributeInQueue = (cards, n) => {
    try {
        let queue = require('../../utility/queue');
        let person = new queue();
        for (i = 0; i < n; i++) {
            let single = new queue();
            for (let j = 0; j < rank.length; j++) {
                single.enqueue(cards[j]);
                var a = single.sort(rank);
                person.enqueue(a);
            }
            return person;
        }
    } catch (e) {
        console.log("error", e)
    }
}
/*
 * @description : sort
 * @purpose:   it sorts deck of cards distributed to people.
 * @param {data}, which has data information. 
 */
module.exports.sort = (arr) => {
    try {
        for (let i = 1; i < arr.length; i++) {
            var key = arr[i];
            var j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
        return (arr);

    } catch (e) {
        console.log(e);
    }
}