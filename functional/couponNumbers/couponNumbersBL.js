/**
* @description : generating random numbers adding distincts to array
* @param {int}, which has data information
* @return {data}, printing counts to add numbers
*/
couponNumbers = (number) => {
    let loop = 0;
    let count = 0;
    let s = [];
    while (loop == 0) {
        //generating random numbers, *10  gives integer,%number is for range of random.
        let a = (parseInt(Math.random() * 10) % number);
        count++;
        // adding distinct numbers
        if (s.includes != true)
            s.push(a);
        if (s.length == number) {
            loop = 1;
        }
        // console.log(s);
    }
    console.log(count + " " + s);
}
module.exports = { couponNumbers };
