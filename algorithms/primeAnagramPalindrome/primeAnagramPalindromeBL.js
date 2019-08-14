var array = [];
/**
* @description : taking number to find prime
* @param {int}, which has data information
* @return {data}, returning boolean
*/
prime = (n) => {
    for (let i = 2; i < n; i++) {
        if ((n % i) == 0) {
            return false;
        }
    }
    return true;
}
//module.exports={prime};


/**
* @description : taking array
* @param {int}, which has data information
* @return {data}, returning sorted array
*/
isAnagram = (arr) => {
    //console.log(arr);
    var a1 = [];
    var b1 = [];
    var ana = [];
    for (let j = 0; j < arr.length; j++) {
        for (let k = j + 1; k < arr.length; k++) {
            if (arr[j].length == arr[k].length) {
                // converting to string
                let a = arr[j].toString();
                let b = arr[k].toString();
                //console.log(a);
                //converting to string array
                a1 = a.split('');
                b1 = b.split('');
                // sorting array
                a1.sort();
                //console.log(b1);
               var b2= b1.sort();
                //console.log(a1);
                //joining the array
                a1 = parseInt(a1.join(''));
                b1 = parseInt(b1.join(''));
                //console.log(a1);

                if (a1 === b2) {
                    // for distinct value
                    //if (!ana.includes(a1)) {
                        // ading to array
                        ana.push(a1);
                        ana.push(b1);

                    }
                }

            }


        }
    //}
    console.log(ana);
    return ana;
}
//module.exports = { prime, isAnagram };

/**
* @description : taking number to check palindrome
* @param {int}, which has data information
* @return {data}, printing palindrom
*/
isPalindrome = (num) => {
    var p = [];

    var temp = num;
    var sum = 0;
    var r = 0;
    while (num > 0) {
        // storing reminder
        r = parseInt(num % 10);
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
