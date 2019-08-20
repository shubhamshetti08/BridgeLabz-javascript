const fs=require('fs');
module.exports=class Inventory{
     constructor(){
        this.content=null;
        this.fileName=null;
    }
    jsonParse(fileName){
        this.fileName=fileName;
        this.content=JSON.parse(fs.readFileSync(fileName));
      
    }
    disp(){
        console.log(this.content.Grocery);
    }

    value(){
        var sum=0;
        var sum1=0;
        this.content.Grocery.rice.forEach(element => {
           sum1=sum1+ element.price*element.weight
            
        });
        var sum2=0;
        this.content.Grocery.wheat.forEach(element => {
           sum2=sum2+ element.price*element.weight
            
        });
        var sum3=0;
        this.content.Grocery.pulse.forEach(element => {
           sum3=sum3+ element.price*element.weight
            
        });
     
sum=sum1+sum2+sum3;
console.log('total value of rice '+sum1+"rs");
console.log('total value of wheat '+sum2+"rs");
console.log('total value of pulse '+sum3+"rs");
console.log('total value of inventories '+sum+"rs");
    }
    addCategory(category=null){
       
        
    //     this.content.Grocery.forEach(element => {
    //         element[category]=[];
    //     });
    // }
    this.content.Grocery[category]=[];
}

    addElements(category=null,name=null,weight=null,price=null){
       this.content.Grocery[category].push({"name":name,"weight":weight,"price":price})
       
    }
    saveFile(){
        fs.writeFile(this.fileName,JSON.stringify(this.content));
    }
}


