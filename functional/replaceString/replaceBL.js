/**
* @description : taking string and old string and new string
* @param {int}, which has data information
* @return {boolean},returning replaced string
*/
replaceString = (str1, replacer, modify) => {
    return str1.replace(replacer, modify);
}
/**
* @description : taking user input string
* @param {int}, which has data information
* @return {boolean},returning true or false 
*/
checkStringLen = (thn) => {
    if (thn.length <= 3) return true;
    return false;
}

module.exports = { replaceString, checkStringLen };
