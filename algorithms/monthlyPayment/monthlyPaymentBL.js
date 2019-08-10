/**
* @description : taking principal,rate of month,year
* @param {int}, which has data information
* @return {data}, returning payment(data)
*/
exports.monthlyPayment = (P, R, Y) => {
    let n = 12 * Y;
    r = R / 12 * 100;
    //payment using pawer of(r+1)
    var payment = P * r / 1 - (Math.pow(1 + r, -n));
    return payment;
}
