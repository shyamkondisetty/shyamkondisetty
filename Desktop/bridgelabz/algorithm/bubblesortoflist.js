var utility=require('../Utility/utility');
utility.createfile();
var fs = require('fs');
var array = fs.readFileSync('intlist.txt').toString().split(",");
var res=utility.bubblesort(array);