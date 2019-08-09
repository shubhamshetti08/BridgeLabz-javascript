arraySort=(arr)=>{
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
}
/*--------------------------------------------------------------------------------------------*/
binarySearchInt=(arr,key)=>{
    var start=0,end=arr.length,mid= parseInt((start+end)/2);
    while(start<=end){
        if(key==arr[mid]){
            console.log('element found at position  '+mid);
            break;
        }
        else if(key<arr[mid]){
            end=mid-1;
        }
        else{
            start=mid+1;
        }
        mid=parseInt((start+end)/2);
    }
    if(start>end){
        console.log('element not found ');
    }
    
}
/*------------------------------------------------------------------------------------------------*/
binarySearchString=(s,key)=>{
    var start=0;
    
    arr=s.split(' ');
    var end=arr.length-1;
    var mid=parseInt((start+end)/2);
    arr=arr.sort();
    while(start<end){
       
        console.log("position "+mid);
        if(arr[mid]==key){
            console.log('element found at position  '+mid);
            break;
        }
        else if(arr[mid]<key){
            end=mid-1;
        }
        else{
            start=mid+1;
        }
        mid=parseInt((start+end)/2);
        
    }
    if(start>end){
        console.log('element not found ');
    }
    
}
/*------------------------------------------------------------------------------------------------*/
insertionSortInt=(arr)=>{
    for(let i=1;i<arr.length;i++){
        var key =arr[i];
       var  j=i-1;
        while ( j >=0 && arr[j]>key){
              arr[j+1]=arr[j];
              j=j-1;
        }
        arr[j+1]=key;
    }
    console.log(arr);

}
/*------------------------------------------------------------------------------------------------------------*/

insertionSortString=(string)=>{
    arr=string.split(' ');
    for(let i=1;i<arr.length;i++){
        var key =arr[i];
       var  j=i-1;
        while ( j >=0 && arr[j]>key){
              arr[j+1]=arr[j];
              j=j-1;
        }
        arr[j+1]=key;
    }
    console.log(arr.join(' '));

}
/*-----------------------------------------------------------------------------------------------------*/
  bubbleSortInt=(arr)=>{
      for(let i=0;i<arr.length;i++){
          for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;

            }
            
          }
         
      }
      console.log(arr);
  }
/*----------------------------------------------------------------------------------------------------*/
bubbleSortString=(string)=>{
    arr=string.split(' ');
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
          if(arr[i]>arr[j]){
              let temp=arr[i];
              arr[i]=arr[j];
              arr[j]=temp;

          }
          
        }
       
    }
    console.log(arr.join(' '));
}







module.exports={arraySort,binarySearchInt,binarySearchString,insertionSortInt,insertionSortString,bubbleSortInt,bubbleSortString};
