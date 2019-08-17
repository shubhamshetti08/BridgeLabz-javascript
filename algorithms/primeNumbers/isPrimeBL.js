/**
* @description : taking number to find prime
* @param {int}, which has data information
* @return {data}, returning boolean
*/
isPrime = (n) => {
    try {
        if (n <= 1) {
            return false;
        }
        for (let i = 2; i < n / 2; i++) {
            if ((n % i) == 0) {
                return false;
            }
        }
        return true;
    } catch (e) {
        console.log(e);
    }
}
module.exports = { isPrime }