// link to utility
const utill=require('../../utility/utility');


var reference1 = require('../../utility/linkedList');
const read = require('readline-sync');
// creating object of linkedlist
var obj=  new reference1();

/*
* @description : unOrderedList
* @purpose: perform split operation on string and link each data to node in linked list
* @param {str}, which has data information about string read from file and passed from unorderedList
*/
  let unOrderedList=(file)=>{
   try{
    var s= file.split(' ');
   s.forEach(element=> {
     // inserting at the end of linkedlist
        obj.insertAtEnd(element);
   

   });
      //user is asked to enter a word if the word is present it is removed from the linkedlist else it is added
      let word = read.question("enter a word")
      if (s.includes(word)) {
        // delete at the end
      obj.deleteAtEnd(word);
      } else {
      obj.insertAtEnd(word);
      
      }
      
      //displays the fucntion after deleting or adding the data
     var str= obj.disp();

      utill.writeFile('write.txt',str);
     
      
      } catch (e) {
      console.log(e)
      }
      }
    
      
        //exporting the function
        module.exports = {unOrderedList};