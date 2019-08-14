const ref= require('../../algorithms/primeNumbers/isPrimeBL')
var rows=10;
var clos=100;
var arr =[];

for(let i=1;i<=rows;i++){
    var arr2=[];
    str="";
   // for(j=1;j<=clos;j++){
       //sending (1-100)numbers for 1st row and (100-200) for 2nd ......till 1000
    for(let j=(i-1)*clos;j<=i*clos;j++){
        if(ref.isPrime(j)) 
        { arr2.push(j);
        str=str+" "+j;
        }
    }

    arr.push(str);
}
console.log(arr);