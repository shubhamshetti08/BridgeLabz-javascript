let references = require('/home/admin1/Desktop/shubham/utility/utility.js');
anagram=(s1,s2)=>{
    if(s1.length==s2.length){
     s1=s1.toLowerCase();
     s2=s2.toLowerCase();
     //let c1 = [...s1]
     let c1=s1.split('');
     let c2=s2.split('');
   // c1= c1.sort();
  //  c2=c2.sort();
  let a1=[];
  let  a2=[];
  a1=references.arraySort(c1);
  a2=references.arraySort(c2);
    for(let i=0;i<a1.length;i++){
        if(a1[i]==a2[i]){
           return true;
        }
        else{
           return false;
        }
}
  
} else{
    return false;
}
    
   
}

module.exports={anagram};
