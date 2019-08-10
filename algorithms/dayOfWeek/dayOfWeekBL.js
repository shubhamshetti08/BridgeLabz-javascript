/**
* @description : taking date month and year
* @param {int}, which has data information
* @return {data}, returning day(0 to 6)
*/
dayOfWeek = (d, m, y) => {

    let y1 = parseInt(y - ((14 - m) / 12));
    let x = parseInt(y1 + (y1 / 4) - (y1 / 100) + (y1 / 400));
    let m1 = parseInt(m + 12 * ((14 - m) / 12) - 2);
    let d1 = parseInt((d + x + ((31 * m1) / 12)) % 7);
    return d1;
}
module.exports = { dayOfWeek };

