const fs = require('fs');
module.exports = class Share {
    constructor() {
        this.content = null;
        this.fileName = null;
    }
    /*
     * @description : jsonParse
     * @purpose:   it reads json file from given adress and convert it to script obj.
     * @param {data}, which has data information. 
     */
    jsonParse(fileName) {
        this.fileName = fileName;
        this.content = JSON.parse(fs.readFileSync(fileName));

    }
    printReport() {
        console.log(this.content);
        // this.content.forEach(element => {
        //     console.log(element);

        // });
    }
    /*
     * @description : value
     * @purpose:   it calculate value of inventory
     * @param {data}, which has data information. 
     */
    value() {
        var sum1 = 0;
        this.content.Stock.forEach(element => {
            sum1 = sum1 + element.price * element.numberofshares

        });
        this.content.Stock.forEach(element => {
            console.log(element.name + '  is rs  ' + element.price * element.numberofshares);
        });
        // console.log(' value of  ' + this.content.Stock[0].name + "  is rs " + this.content.Stock[0].price * this.content.Stock[0].numberofshares);
        // console.log(' value of  ' + this.content.Stock[1].name + "  is rs " + this.content.Stock[1].price * this.content.Stock[1].numberofshares);
        // console.log(' value of  ' + this.content.Stock[2].name + "  is rs " + this.content.Stock[2].price * this.content.Stock[2].numberofshares);
        console.log('total value of stocks ' + sum1 + "rs");
    }
    /*
     * @description : stockAccount
     * @purpose:  it creat category(empty array).
     * @param {data}, which has data information. 
     */
    stockAccount(category = null) {

        this.content[category] = [];

    }
    /*
     * @description : buyShares
     * @purpose:   it add elements to account
     * @param {data}, which has data information. 
     */
    buyShares(category = null, name = null, numberofshares = null, price = null, time) {

        this.content[category].push({
            "name": name,
            "numberofshares": numberofshares,
            "price": price,
            "time": time
        })

    }
    /*
     * @description : sell
     * @purpose:   it deletes account
     * @param {data}, which has data information. 
     */
    sell(category = null) {
        this.content[category] = null;
        //this.content=this.content.map((category)=>category!='lic');
    }
    /*
     * @description : saveFile
     * @purpose:   it convert script obt and save it to json file.
     * @param {data}, which has data information. 
     */
    save() {
        fs.writeFileSync(this.fileName, JSON.stringify(this.content));
    }
}