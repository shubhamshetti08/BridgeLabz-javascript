const fs = require('fs');
module.exports = class Inventory {
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
    disp() {
        console.log(this.content.Grocery);
    }
    /*
     * @description : value
     * @purpose:   it calculate value of inventory
     * @param {data}, which has data information. 
     */
    value() {
        var sum = 0;
        var sum1 = 0;
        this.content.Grocery.rice.forEach(element => {
            sum1 = sum1 + element.price * element.weight

        });
        var sum2 = 0;
        this.content.Grocery.wheat.forEach(element => {
            sum2 = sum2 + element.price * element.weight

        });
        var sum3 = 0;
        this.content.Grocery.pulse.forEach(element => {
            sum3 = sum3 + element.price * element.weight

        });

        sum = sum1 + sum2 + sum3;
        console.log('total value of rice ' + sum1 + "rs");
        console.log('total value of wheat ' + sum2 + "rs");
        console.log('total value of pulse ' + sum3 + "rs");
        console.log('total value of inventories ' + sum + "rs");
    }
    /*
     * @description : addCategory
     * @purpose:  it creat category(empty array).
     * @param {data}, which has data information. 
     */
    addCategory(category = null) {


        //     this.content.Grocery.forEach(element => {
        //         element[category]=[];
        //     });
        // }
        this.content.Grocery[category] = [];
    }
    /*
     * @description : addElements
     * @purpose:   it add elements to grocery
     * @param {data}, which has data information. 
     */
    addElements(category , name , weight, price ) {
        this.content.Grocery[category].push({
            "name": name,
            "weight": weight,
            "price": price
        })

    }
    /*
     * @description : saveFile
     * @purpose:   it convert script obt and save it to json file.
     * @param {data}, which has data information. 
     */
    saveFile() {
        fs.writeFile(this.fileName, JSON.stringify(this.content));
    }
}