/*
 * @description : created Regex class 
 * @purpose:   it has faullName and phoneNumber as attributes.
  
 */
module.exports = class RegEx {
    constructor() {
        this.fullName = null;
        this.phoneNumber = null;
    }
    /*
     * @description : setFullName
     * @purpose:   it set full name.
     * @param {data}, which has data information. 
     */
    set setFullName(fullName) {
        this.fullName = fullName;
    }
    /*
     * @description : checkFullName
     * @purpose:   it check for user input format if it matches to regex prints valid.
     * @param {data}, which has data information. 
     */
    checkFullName() {
        if ((this.fullName).match(/[a-z,A-Z]+/)) {
            console.log('valid name')
        } else throw "name is invalid"
    }

    /*
     * @description : setPhoneNumber
     * @purpose:   it set phone number.
     * @param {data}, which has data information. 
     */
    set setPhone(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    /*
     * @description : getFirstName
     * @purpose:   it process for user input format if it matches execute and save it to first name;
     * @param {data}, which has data information. 
     */
    get getFirstName() {
        let name = /[^\s]+/.exec(this.fullName);
        if (!name) throw "name is in valid";
        else return name;
    }
    /*
     * @description : checkPhoneNumber
     * @purpose:   it check for user input format if it matches to regex prints valid.
     * @param {data}, which has data information. 
     */
    checkPhoneNumber() {
        if ((this.phoneNumber).match(/\d{10}/)) {
            console.log('valid phone number')
        } else throw "number is invalid"

    }
    /*
     * @description : toDay
     * @purpose:   it check for user input format if it matches to regex executes only date save it to toDaydate.
     * @param {data}, which has data information. 
     */
    get toDay() {
        var toDayDate = new Date().toJSON().slice(0, 10);

        var dateData = /^(\d{4})-(\d{2})-(\d{2})$/.exec(toDayDate);
        //var dateData=( dateDat.toString().split('-').reverse().join('/'));
        //return dateData;
        //var dateData = toDay.getFullYear()+'-'+(toDay.getMonth()+1)+'-'+toDay.getDate();
        return dateData[3] + '/' + dateData[2] + '/' + dateData[1];

    }
    /*
     * @description : dateFormat
     * @purpose:   checks date format is present in string or not.
     * @param {data}, return date format. 
     */
    get dateFormat() {
        return /(\d{2})\/(\d{2})\/(\d{4})/;
    }

}