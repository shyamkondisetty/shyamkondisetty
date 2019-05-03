/************************************************************************************
 * @purpose : to seach the input word is present in file or not                     *
 * @description :it uses the singly linked list to seach the element present or not *
 ************************************************************************************/


var utility=require('../Utility/unOrderedUtil');
var readline=require('readline-sync');
//var unOrderedList=new utility();
var list=new utility();
list.add(10);
list.add(20);
list.add(30);

/*var fs = require('fs');
var numberList = fs.readFileSync('wordList.txt').toString().split(" ");

for(var i=0;i<numberList.length;i++){
    unOrderedList.add(numberList[i]);
}
var input=readline.question("enter the input\n");
unOrderedList.search(input);
*/
console.log(list.printList());
list.add(40);
console.log(list.printList());
list.remove(30);
console.log(list.printList());
list.remove(10);
console.log(list.printList());
list.remove(20);
console.log(list.printList());
list.remove(40);
console.log(list.printList());
        list.add(10);
        list.add(20);
        list.add(30);
        console.log(list.printList());

