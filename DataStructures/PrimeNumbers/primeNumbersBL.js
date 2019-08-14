var rows=10;
var clos=100;
for(let i=0;i<rows;i++){
arr[i]=new Array(rows);
}
var start=1;
for(let i=0;i<rows;i++){
    for(let j=0;i<clos;j++){
arr[i][j]=start;
start=start+1;
    }
}
for(let i=0;i<rows;i++){
    for(let j=0;i<clos;j++){

console.log(arr[i][j]+' ');
    }
}