var utility=require('../Utility/utility');
var readline=require('readline-sync');
var n=readline.question("enter the value to find harmonic number");
var res=utility.harmonic(n);
console.log(res);