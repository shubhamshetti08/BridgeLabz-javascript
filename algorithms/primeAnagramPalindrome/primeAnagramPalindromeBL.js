var array = [];
prime = (n) => {
    for (let i = 2; i < n; i++) {
        if ((n % i) == 0) {
            return false;
        }
    }
    return true;
}
//module.exports={prime};



isAnagram = (arr) => {
    //console.log(arr);
    var a1 = [];
    var b1 = [];
    var ana = [];
    for (let j = 0; j < arr.length; j++) {
        for (let k = j + 1; k < arr.length; k++) {
            if (arr[j].length == arr[k].length) {
                let a = arr[j].toString();
                let b = arr[k].toString();
                //console.log(a);
                a1 = a.split('');
                b1 = b.split('');
                a1.sort();
                //console.log(b1);
                b1.sort();
                //console.log(a1);
                a1 = parseInt(a1.join(''));
                b1 = parseInt(b1.join(''));
                //console.log(a1);

                if (a1 === b1) {
                    if (!ana.includes(a1)) {
                        ana.push(a1);
                    }
                }

            }


        }
     }
    console.log(ana);
    return ana;
}
//module.exports = { prime, isAnagram };
isPalindrome = (num) => {
  var p=[];
 
    var temp = num;
    var sum=0;
    var r=0;
    while (num > 0) {
       
         r =parseInt(num % 10);
         sum = parseInt((sum * 10) + r);
        num = parseInt(num / 10);
    }
    if (temp == sum) {
        
    console.log(temp);
       
        
    }
   // return false;
  //console.log(p);
  
}



module.exports = { prime, isAnagram, isPalindrome };
