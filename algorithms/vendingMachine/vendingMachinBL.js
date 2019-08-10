/**
* @description : taking amount
* @param {int}, which has data information
* @return {data}, printing exact change to be give
*/
exports.vendingMachine = (amount) => {
    var notes = [1000, 500, 100, 50, 10, 5, 2, 1];
    var counts = [];
    for (let i = 0; i < 8; i++) {
        if (amount => notes[i]) {
            // exctracting changes
            counts[i] = parseInt(amount / notes[i]);
            amount = parseInt(amount - notes[i] * counts[i]);
        }

    }
    // printing
    for (let i = 0; i < 8; i++) {
        console.log(counts[i] + '  notes of  ' + notes[i]);
    }
}