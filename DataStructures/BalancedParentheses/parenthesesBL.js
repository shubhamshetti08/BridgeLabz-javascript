
// connection to stack class
const reference = require('../../utility/stack');
/*
* @description :  parenthese
* @purpose:   compares open parentheses with closed ones if parenthese are correct then prints balanced.
* @param {}, which has data information. 
*/
exports.parentheses = (exp) => {
    //creats object of stack
    var obj = new reference();
    try {

        for (let i = 0; i < exp.length; i++) {
            // console.log(exp[i]);
            //console.log(exp.length);
            if (a[i] == '(') {
                obj.push('(');
                count++;
            }
            else if (a[i] == ')') {
                obj.pop()
                count--;
            }
        }
    }
    catch (e) {
        console.log(e);
    }
    if (count == 0) {
        console.log('parentheses are balanced');
    }
    else {
        console.log('parentheses are not balanced');
    }
}