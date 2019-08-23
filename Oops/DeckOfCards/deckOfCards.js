const reference=require('./deckOfCardsBL');
var suits=['Clubs','Diamonds','Hearts','Spades'];
var values=['2','3','4','5','6','7','8','9','10','jack','queen','king','ace'];
var deck=reference.deckOfCard(suits,values);
reference.shuffle();

arr=[]
var k=0;
for(let i=0;i<4;i++){
    arr1=[]
    for(let j=0;j<9;j++){
   // arr[i][j]=deck[k];
   arr1.push(deck[k])
    k=k+1;
    }
    arr.push(arr1);
}
console.log(arr);
