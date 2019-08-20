module.exports=class RegEx{
    constructor(){
        this.fullName=null;
        this.phoneNumber=null;
    }
    
    set setFullName(fullName){
        this.fullName=fullName;
    }
    checkFullName(){
        if((this.fullName).match(/[a-z,A-Z]+/)){
            console.log('valid name')
        }
        else throw "name is invalid"
    }
        
    
    set setPhone(phoneNumber){
        this.phoneNumber=phoneNumber;
    }
    get getFirstName(){
        let name=/[^\s]+/.exec(this.fullName);
        if(!name) throw "name is in valid";
        else return name;
    }
    checkPhoneNumber(){
        if((this.phoneNumber).match(/\d{10}/)){
            console.log('valid phone number')
        }
        else throw "number is invalid"
        
    }
    get toDay(){
        var toDayDate=new Date().toJSON().slice(0,10);
       
        var dateData=/^(\d{4})-(\d{2})-(\d{2})$/.exec(toDayDate);
        //var dateData=( dateDat.toString().split('-').reverse().join('/'));
        //return dateData;
        //var dateData = toDay.getFullYear()+'-'+(toDay.getMonth()+1)+'-'+toDay.getDate();
        return dateData[3]+'/'+dateData[2]+'/'+dateData[1];
       
    }
    get dateFormat(){
        return /(\d{2})\/(\d{2})\/(\d{4})/;
    }

}
