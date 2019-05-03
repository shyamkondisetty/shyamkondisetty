var utility=require('../Utility/utility');
var readline=require('readline-sync');
var year=readline.question("enter the year that to check leapyear or not : ");
var res=utility.leap(year);
if(res){
    console.log("yes it is a leapyear");
}
else{
    console.log("it is not a leapyear");
}