/********************************************************************************************************************
* @Execution : default node : cmd> deckOfCards.js
* @Purpose : To perform operations specified. 
* @description : create deck of cards and insert in 2d array then shuffle it then distribute 9 cards from
                 deck to 4 people then display  cards .

* @overview : oops concepts
* @author : shubham shetti <shubhamshetti08@gmail.com>
* @version : 1.0
* @since : 23-august-2019
*******************************************************************************************************************/
const reference = require('./deckOfCardsBL');
//var suits=['Clubs','Diamonds','Hearts','Spades'];
var suits = ['♣︎', '♦', '♥︎', '♠︎'];
var values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
var deck = reference.deckOfCard(suits, values);
reference.shuffle();

arr = []
var k = 0;
for (let i = 0; i < 4; i++) {
    arr1 = []
    for (let j = 0; j < 9; j++) {
        // arr[i][j]=deck[k];
        arr1.push(deck[k])
        k = k + 1;
    }
    arr.push(arr1);
}
console.log(arr);