harmonicNumber=(num)=>{
    let harmonic=1;
    for(let i=2;i<=num;i++){
        harmonic=harmonic+(1/i);
    }
    return harmonic;
}
module.exports={harmonicNumber};