// link to utility
const utill=require('../../utility/utility');


var reference1 = require('../../utility/linkedList');
const read = require('readline-sync');
// linkedlist object is created
var obj=  new reference1();

/*
* @description :  orderedList
* @purpose:   perform split operation on string and link each data to node in linked list
* @param {data}, which has data information. 
*/

  let orderedList=(file)=>{
   try{
    var s= file.split(' ');
   s.forEach(element=> {
        obj.insertAtEnd(element);
   

   });
      //user is asked to enter a word if the word is present it is removed from the linkedlist else it is added
      let word = read.question("enter a word  ")
      if (s.includes(word)) {
      obj.deleteAtEnd(word);
      } else {
      obj.insertAtEnd(word);
      
      }
      obj.sortData()
      //displays the fucntion after deleting or adding the data
      var a=obj.disp();
      
      

      utill.writeFile('write.txt',a,'utf-8');
     
      
      } catch (e) {
      console.log(e)
      }
      }
    
      
        //exporting the function
        module.exports = {orderedList};