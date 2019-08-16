const an = require('../../algorithms/anagram/angramBL')

/*
* @description :  anagrams
* @purpose:   takes int array and compairing each elements for anagram if containts same elements prints number
* @param {int array}, which has data information. 
*/
exports.anagrams = (arr) => {
    var a1 = [];
    var a2 = [];
    try {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                //sending elements to anagram 2 at a time
                var anagr = an.anagram(arr[i].toString(), arr[j].toString());


                if (anagr == true) {
                    if (!a1.includes(arr[j])) {
                        //pushed to array
                        a1.push(arr[j].toString())
                    }
                } else if (anagr == false) {
                    if (!a2.includes(arr[j])) {

                        a2.push(arr[j].toString())
                    }

                }
            }
        }
    } catch (e) {
        console.log(e);
    }
    //console.log(arr2.length);          
    console.log('anagram   ' + a1);
    //console.log('not anagrams   ' + a2);

}

