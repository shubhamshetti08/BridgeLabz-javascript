/********************************************************************************************************************
* @Execution : default node : cmd> primeNumbers.js
* @Purpose : to study the algorithms.
* @description : this program displays (1-1000) prime numbers used simple mod and divide logic.  
* @overview : this program displays prime numbers. 
* @author : SHUBHAM A S <shubhamshetti08gmail.com>
* @version : 1.0
* @since : 08-August-2019
*******************************************************************************************************************/

let read= require('readline-sync');
let reference= require('../primeNumbers/isPrimeBL');
for(let n=1;n<1000;n++){
   var result= reference.isPrime(n);

if(result==true){
    
    console.log(n+'  is prime');
}

}
