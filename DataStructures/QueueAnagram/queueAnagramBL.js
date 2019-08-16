const an = require('../../algorithms/anagram/angramBL')
const util = require('../../utility/queue')
/*
* @description :  anagrams
* @purpose:   takes int array and compairing each elements for anagram if containts same elements prints number
* @param {int array}, which has data information. 
*/
exports.ana = (arr) => {
    var obj = new util();
    var a1 = [];
    var a2 = [];
    var a = [];
    try {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                //sending elements to anagram 2 at a time
                var anagr = an.anagram(arr[i].toString(), arr[j].toString());
                if (anagr == true) {
                    if (!a1.includes(arr[j])) {
                        //pushed to array
                        a1.push(arr[j].toString());
                        obj.enqueue(arr[j].toString());
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
    a1.forEach(element => {
        var d = obj.frontpop(element)
        if (!a.includes(d)) {
            a.push(d);
        }
    });
    a.forEach(element => {
        console.log(element.data)
    });

}