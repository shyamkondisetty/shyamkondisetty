var utility=require('../Utility/utility');
var res=utility.leap();
if(res){
    console.log("yes it is a leapyear");
}
else{
    console.log("it is not a leapyear");
}