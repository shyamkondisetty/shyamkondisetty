var utility=require('../Utility/utility');
utility.createfile();

//READFILE INTO AN ARRAY
var fs = require('fs');
var array = fs.readFileSync('wordList.txt').toString().split(",");
utility.binarysearchstring(array);