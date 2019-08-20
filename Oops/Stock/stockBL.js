const fs = require('fs');
module.exports = class Inventory {
    constructor() {
        this.content = null;
        this.fileName = null;
    }
    jsonParse(fileName) {
        this.fileName = fileName;
        this.content = JSON.parse(fs.readFileSync(fileName));

    }
    disp() {
        // console.log(this.content.stock);
        this.content.Stock.forEach(element => {
            console.log(element);

        });
    }

    value() {
        var sum1 = 0;
        this.content.Stock.forEach(element => {
            sum1 = sum1 + element.price * element.numberofshares

        });
        this.content.Stock.forEach(element => {
            console.log(element.name+'  is rs  '+element.price*element.numberofshares);
        });
        // console.log(' value of  ' + this.content.Stock[0].name + "  is rs " + this.content.Stock[0].price * this.content.Stock[0].numberofshares);
        // console.log(' value of  ' + this.content.Stock[1].name + "  is rs " + this.content.Stock[1].price * this.content.Stock[1].numberofshares);
        // console.log(' value of  ' + this.content.Stock[2].name + "  is rs " + this.content.Stock[2].price * this.content.Stock[2].numberofshares);
        console.log('total value of stocks ' + sum1 + "rs");
    }
}


