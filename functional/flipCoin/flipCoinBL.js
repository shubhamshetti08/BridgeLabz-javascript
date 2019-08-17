/**
* @description : no.of times to flip coin
* @param {int}, user input,which has data information
* @return {data}, returning % of head and tails occured.
*/
flip = (n) => {
    try {
        let tail = 0;
        let head = 0;
        for (let i = 0; i < n; i++) {
            // generating random numbers 
            if (Math.random() < 0.5) { tail++; }
            else {
                head++;
            }
        }
        // % of heads and tails
        return [parseInt(tail / n * 100), parseInt(head / n * 100)];
    } catch (e) {
        console.log(e);
    }
}
module.exports = { flip };