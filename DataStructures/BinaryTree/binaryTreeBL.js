 /*
* @description : binary
* @purpose:   to find ourt factorials
* @param {data}, which has data information. 
*/
exports.binary = (input) => {
    class BSTNumber {
        factorial(n) {

            var f = 1;
            for (let i = 1; i <= n; i++) {
                f = f * i;
            }
            return f;
        }


        NumOfBST() {
            try {
                var n = input.questionInt('Enter the number for calculating the number of binary serach trees');
                var a = this.factorial(2 * n);
                var b = this.factorial(n + 1);
                var c = this.factorial(n)
                var res = a / (b * c);
                console.log(res);
                var numOfNodes = this.factorial(n);
                return res * numOfNodes;

            } catch (e) {
                console.log(e);
            }
        }

    }
    var obj = new BSTNumber();
    console.log("The number of possibilities are " + obj.NumOfBST());
}