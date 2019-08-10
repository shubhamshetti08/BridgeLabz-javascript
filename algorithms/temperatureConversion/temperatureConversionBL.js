/**
* @description : taking choice given by user and temperature
* @param {int}, which has data information
* @return {data}, returning ttemperature in celcious and fahrenheit
*/
conversion = (t, c) => {
    if (c == 1) {
        // printing in integer

        console.log(parseInt(t * (9 / 5) + 32) + '  in fahrenheit');
    }
    else if (c == 2) {
        console.log(parseInt((t * 32) * (5 / 9)) + '  in celcious');
    }

}
module.exports = { conversion };