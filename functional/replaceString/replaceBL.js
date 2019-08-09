replaceString=(str1,replacer,modify)=>{
    return str1.replace(replacer,modify);
}
checkStringLen=(thn)=> {
    if(thn.length<=3) return true;
    return false;
}

module.exports={replaceString,checkStringLen};
