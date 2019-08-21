const fs = require('fs');
module.exports = class Share {
    constructor() {
        this.content = null;
        this.fileName = null;
    }
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
    stockAccount(category=null){
        
         this.content[category]=[];
         
    }
    buyShares(category=null,name=null,numberofshares=null,price=null,time){
     
        this.content[category].push({"name":name,"numberofshares":numberofshares,"price":price,"time":time})
       
    }
    sell(category=null){
        this.content[category]=null;
        //this.content=this.content.map((category)=>category!='lic');
    }
    save(){
      fs.writeFileSync(this.fileName,JSON.stringify(this.content));
    }
}


