/**
* @description : taking integer to give square root
* @param {int}, which has data information
* @return {data}, returning sqrroots
*/
exports.squareRoot=(c)=>{
    var temp=c;
    // where e is built in value( 2.71828)
    let epsilon=1e-15;
    //(abs)function returns the absolute value of a number,
    while(Math.abs(temp-c/temp)>epsilon*temp){
        temp=(c/t+t)/2;

    }
    return temp;
}