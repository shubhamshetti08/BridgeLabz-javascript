/**
* @description : taking year in correct format
* @param {int}, which has data information
* @return {boolean},returning true or false 
*/
leapYear = (y) => {
    let flag = false;
    //checking reminder is 0 or not
    if (y % 400 == 0) {
        flag = true;
    }
    //checking reminder is 0 or not
    else if (y % 100 == 0) {
        flag = false;
    }
    if (y % 4 == 0) {
        flag = true;
    }
    else {
        flag = false;
    }
    return flag;
}
module.exports = { leapYear };