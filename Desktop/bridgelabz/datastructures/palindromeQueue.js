/************************************************************************************
 * @purpose : it to check the string is palindrome or not                           *
 * @description : it cheks the string palindrome using queue datastructure          *
 ************************************************************************************/


var readline=require('readline-sync');
var utility=require("../Utility/deQueueutil");
var deQueue=new utility();
var input=readline.question("enter the string to check the palindrome or not");
for(let i=0;i<input.length;i++){
    let char=input.charAt(i);
    deQueue.addRear(char);
}
var output="";
while(!deQueue.isEmpty()){
    
    let char=deQueue.removeRear();
    output=output+char;  
}

if(input==output){
    console.log("yes it is a palindrome");
}
else{
    console.log("it is not a palindrome");
}