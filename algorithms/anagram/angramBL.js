
let references = require('/home/admin1/Desktop/shubham/utility/utility.js');
/**
* @description : taking two strings to compare
* @param {int}, which has data information
* @return {data}, returning boolean
*/

sortedstr = (str) => {
  let a1 = str.split('');
  a1.sort();
  return a1.join('');
}

anagram = (s1, s2) => {
  if (s1.length == s2.length) {

    //console.log(s1,s2);
    //console.log(sortedstr(s1.toLowerCase()));
    // console.log(sortedstr(s2.toLowerCase()));
    return sortedstr(s1.toLowerCase()) == sortedstr(s2.toLowerCase())
    // converting chars to lower case
    //  s1 = s1.toLowerCase();
    //   s2 = s2.toLowerCase();
    //   //let c1 = [...s1]
    //   // converting string to string array
    //   let c1 = s1.split('');
    //   let c2 = s2.split('');
    //   // c1= c1.sort();
    //   //  c2=c2.sort();

    //   let a2 = [];
    //   // sending array to sort function
    //   a1 = references.sort(c1);
    //   a2 = references.sort(c2);
    //   for (let i = 0; i < a1.length; i++) {
    //     if (a1[i] == a2[i]) {
    //       return true;
    //     }
    //     else {
    //       return false;
    //     }
    //   }

  } else {
    return false;
  }


}

module.exports = { anagram };
