/**
* @description : harminic number using formula
* @param {int}, which has data information
* @return {data}, returning harmonic number
*/
harmonicNumber = (num) => {
    // h1=1;
    let harmonic = 1;
    for (let i = 2; i <= num; i++) {
        //harmonic formula
        harmonic = harmonic + (1 / i);
    }
    return harmonic;
}
module.exports = { harmonicNumber };