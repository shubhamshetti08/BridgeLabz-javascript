/**
* @description : taking number(power of 2)
* @param {int}, which has data information
* @return {boolean},returning power of two 
*/
powerOfTwo = (num) => {
    try {
        let result = 1;
        let i = 1;
        while (i <= num) {
            //multiplying number and increamenting i
            result = result * 2;
            i++;
        }
        return result;

    } catch (e) {
        console.log(e);
    }
}
module.exports = { powerOfTwo };
