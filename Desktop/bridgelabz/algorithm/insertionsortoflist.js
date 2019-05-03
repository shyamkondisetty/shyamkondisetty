try{
var utility=require('../Utility/utility');
var fs = require('fs');
var array = fs.readFileSync('wordList.txt').toString().split(" ");
var res=utility.insertionsortstring(array);
console.log(res);}
catch(err){
    console.log(err);
}