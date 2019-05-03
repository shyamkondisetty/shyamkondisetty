var utility=require('../Utility/utility');
var readline=require('readline-sync');
var str1=readline.question("enter the word to replace\n");
var str2=readline.question("enter the word to replace\n");
var res=utility.replacestring(str1,str2);
console.log("the replaced sentence is : ");
if(res!=null){
console.log(res);
}
else{
  console.log("the word is not found");  
}