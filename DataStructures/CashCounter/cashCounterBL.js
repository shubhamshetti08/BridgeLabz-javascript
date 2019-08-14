const util = require('../../utility/queue');
/*
* @description :  cashCounter
* @purpose:   perform enqueue and dequeue opertions.
* @param {amount,data}, which has data information. 
*/
exports.cashCounter = (amount, limit) => {
    var obj = new util();
    try {
        for (let i = 1; i <= limit; i++) {
            obj.enqueue(i);

        }
        do {
            var entry = read.question('enter 1 to deposite or enter 2 to withdraw');
            if (entry == 1) {

                var depo = read.questionInt('enter amount to deposite');
                if (depo <= 0) {
                    console.log('plz deposit more than zero');
                    depo = read.questionInt('enter amoun greater than 0 to deposite');

                }
                if (depo > 0) {
                    amount = parseInt(amount + depo);
                    console.log(amount);
                    limit--;
                }
            }
            else if (entry == 2) {
                if (amount > 1) {

                    var wid = read.questionInt('enter amount to withdraw');
                    if (wid > amount) {
                        console.log('cash is not available plz try again')
                        wid = read.questionInt('enter amount to withdraw');

                    }
                    else {

                        amount = parseInt(amount - wid);
                        console.log(amount);
                        limit--;
                    }
                }
                else {
                    console.log('cash is not available ');
                }
            }

            obj.frontpop();

        } while (limit != 0);
    }
    catch (e) {
        console.log(e);
    }
}