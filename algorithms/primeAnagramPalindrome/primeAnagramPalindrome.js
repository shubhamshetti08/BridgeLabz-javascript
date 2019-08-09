/********************************************************************************************************************
* @Execution : default node : cmd> primeAnagramPalindrome.js
* @Purpose : to study the algorithms.
* @description : this program displays (1-1000) prime numbers and checks these are Anagram or not and also checks for Palindrome. 
* @overview : this program displays prime numbers that are Anagram and Palindrome.
* @author : SHUBHAM A S <shubhamshetti08gmail.com>
* @version : 1.0
* @since : 08-August-2019
*******************************************************************************************************************/

let read = require('readline-sync');
let reference1= require('../primeAnagramPalindrome/primeAnagramPalindromeBL');
var arr=[];
var s=[];
var a=[];
for(let n=2;n<1000;n++){
    let res=reference1.prime(n);
    if(res==true)
    {
    arr.push(n);
    }
//if(result==true){
  //  if(!arr.includes(n)){
     //   arr.push(n);
  //  }
//}

}
//s=arr;
console.log(arr);
s=reference1.isAnagram(arr);
for(let i=0;i<s.length;i++){
    //console.log(s[i]);
reference1.isPalindrome(s[i]);
}
// //console.log(result);
// if(result==true){
// a.push(n)
// //console.log(n);
// }

// console.log('anagrams are'+ a);