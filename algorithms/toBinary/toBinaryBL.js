/**
* @description : taking decimal number
* @param {int}, which has data information
* @return {data}, returning binary number
*/
exports.toBinary = (n) => {
    var s = '';
    while (n > 0) {
        let r = (n % 2);
        n = parseInt(n / 2);
         s = r + '' + s;
    }
    return s;
}
