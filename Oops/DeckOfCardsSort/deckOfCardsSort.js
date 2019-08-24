/********************************************************************************************************************
* @Execution : default node : cmd> deckOfCardsSort.js
* @Purpose : To perform operations specified. 
* @description : create deck of cards and insert in queue then shuffle it then distribute 9 cards from
                 deck to 4 people then display ordered cards by ranks.

* @overview : oops concepts
* @author : shubham shetti <shubhamshetti08@gmail.com>
* @version : 1.0
* @since : 24-august-2019
*******************************************************************************************************************/
const reference = require('../DeckOfCardsSort/deckOfCardsSortBL');
//var suits=['Clubs','Diamonds','Hearts','Spades'];
var suits = ['♣︎', '♦', '♥︎', '♠︎'];
var values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
var deck = reference.deckOfCard(suits, values);
reference.shuffle();
var arr = reference.distributeInQueue(deck, 4);

console.log(arr);
//console.log(arr.sort(values));