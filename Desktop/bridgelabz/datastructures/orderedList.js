/************************************************************************************
 * @purpose : it adds the numbers to the singly linked list                         *
 * @description : it takes the input from user and search the value is pesent in    *
 *                the list or not                                                   *
 ************************************************************************************/

var utility=require('../Utility/orderedutil');
var readline=require('readline-sync');
var unOrderedList=new utility();
var fs = require('fs');
var numberList = fs.readFileSync('numberList.txt').toString().split(" ");
for(i=0;i<numberList.length;i++){
    numberList[i]=parseInt(numberList[i]);
    unOrderedList.add(numberList[i]);
}
var input=readline.question("enter the input");
input=parseInt(input);
unOrderedList.add(input);
console.log(unOrderedList.printList());

