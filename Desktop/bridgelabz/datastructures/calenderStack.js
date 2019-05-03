/************************************************************************************
 * @purpose : is to display the particular month in a year  using stack             *
 * @description : it takes the inputs of month and year and display the calander    *
 *                of particular month using stack datastructure                     *
 ************************************************************************************/


var mySatck=require('../Utility/stackutil');
var myQueue=require('../Utility/queueutil');
var utility=require('../Utility/utility');
var utility2=require('../Utility/utility2');
var stack1=new mySatck();
var stack2=new mySatck();
var readln=require("readline-sync");
var month=readln.question("enter month\n");
var year=readln.question("enter year\n");
var dayArray=["sun","mon","tue","wed","thu","fri","sat"];
var dayQueue=new myQueue();
for(let i=0;i<dayArray.length;i++){
dayQueue.enqueue(dayArray[i]);
}
console.log(dayQueue.printQueue());

function objectOfData(day,date){
    this.day=day;
    this.date=date;
}
month=parseInt(month);
year=parseInt(year);

var dayResult=utility2.dayofweek(month,year);
var monthDays=utility2.daysInMonth(month,year);
var day=1;
for(var i=0;i<35;i++){
    if(dayResult<=i&&day<=monthDays){  
        stack1.push(new objectOfData(dayArray[day%7],day));
        dayResult++;
        day++
    }
    else{
        stack1.push("-")
    }
}
while(!stack1.isEmpty()){
var result=stack1.pop();
stack2.push(result);
}

for(let i=0;i<5;i++){
    var weekString=""
    for(let j=0;j<7;j++){
        var result=stack2.pop();
        if(result=="-"){
            weekString=weekString+"    ";
        }
        else{
            if(result.date<10){
            weekString=weekString+"  "+result.date+" ";
            }
            else
            weekString=weekString+" "+result.date+" "
        }
    }
    console.log(weekString); 
}

