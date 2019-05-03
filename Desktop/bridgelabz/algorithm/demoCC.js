var readline=require('readline-sync');
var x=readline.question("");
x=parseInt(x);
var y=readline.question("");
y=parseInt(y);
if(x > y){
console.log("true");
}
else{
    console.log("false");
}