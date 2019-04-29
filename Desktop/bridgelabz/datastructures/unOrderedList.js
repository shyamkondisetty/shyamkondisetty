/************************************************************************************
 * @purpose : to seach the input word is present in file or not                     *
 * @description :it uses the singly linked list to seach the element present or not *
 ************************************************************************************/


var utility=require('../Utility/unOrderedUtil');
var readline=require('readline-sync');
var unOrderedList=new utility();

var fs = require('fs');
var numberList = fs.readFileSync('wordList.txt').toString().split(" ");

for(var i=0;i<numberList.length;i++){
    unOrderedList.add(numberList[i]);
}
var input=readline.question("enter the input\n");
unOrderedList.search(input);

