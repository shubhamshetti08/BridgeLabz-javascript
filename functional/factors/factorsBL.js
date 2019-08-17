/**
* @description : taking number finding factors
* @param {int}, which has data information
* @return {data}, printing factors og given number
*/
factors = (num) => {
    try{
    for (let i = 2; i <= num; i++) {
        // cheking reminders is 0 or not
        while (num % i == 0) {
            console.log(i);
            // dividing number
            num = num / i;
        }
    }

}catch(e){
    console.log(e);
}
}
module.exports = { factors };