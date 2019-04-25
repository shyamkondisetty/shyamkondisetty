var utility=require('../Utility/utility');
var fs = require('fs');
var array = fs.readFileSync('wordlist.txt').toString().split(",");
var res=utility.insertionsortstring(array);