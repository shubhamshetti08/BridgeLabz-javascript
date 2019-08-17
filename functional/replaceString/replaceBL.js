/**
* @description : taking string and old string and new string
* @param {int}, which has data information
* @return {boolean},returning replaced string
*/
replaceString = (str1, replacer, modify) => {
    try {
        return str1.replace(replacer, modify);
    } catch (e) {
        console.log(e);
    }
}
/**
* @description : taking user input string
* @param {int}, which has data information
* @return {boolean},returning true or false 
*/
checkStringLen = (thn) => {
    try {
        if (thn.length <= 3) return true;
        return false;
    } catch (e) {
        console.log(e);
    }
}

module.exports = { replaceString, checkStringLen };
