// read line sync
var read = require('readline-sync');
/**
* @description : taking user input,start index,mid index,end index
* @param {int}, which has data information
* @return {data}, printing exact number
*/

findNumber = (start, mid, end) => {
    while (start <= end) {
        if (start == end) {
            console.log('the number is ' + start);
            break;
        }
        // for printing values range
        console.log(start + '---' + mid + 'f' + '  ' + (mid + 1) + '---' + end + ' t');
        // taking true or false from user
        var enter = read.question('enter true or false   ');
        console.log(enter);

        if (enter ==='f') {

            end = mid ;
        
        }
        else{
            start=mid+1;
        }
        


        // converting into integer value
        mid = parseInt((start + end) / 2);


    }
}
module.exports = { findNumber };