flip=(n)=>{
    let tail=0;
    let head=0;
    for(let i=0;i<n;i++){
        if(Math.random()<0.5){ tail++;}
        else{
            head++;
        }
        }
        return[parseInt(tail/n*100),parseInt(head/n*100)];
    }
module.exports={flip};