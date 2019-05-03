/************************************************************************************
 * @purpose : is to display the particular month in a year                          *
 * @description : it takes the inputs of month and year and display the calander    *
 *                of particular month                                               *
 ************************************************************************************/

var readln=require("readline-sync");
var utiltiy=require('../Utility/utility');
var utility2=require('../Utility/utility2');
var array=[];
var month=readln.question("enter month\n");
var year=readln.question("enter year\n");
month=parseInt(month);
year=parseInt(year);
var dayResult=utility2.dayofweek(month,year);
var monthDays=utility2.daysInMonth(month,year);
var k=0,day=1;
for(var i=0;i<5;i++){
    var weekArray=[];
    for(var j=0;j<7;j++){
        if(dayResult==k&&day<=monthDays){
           weekArray.push(day++);
            dayResult++;
            k++;
        }
        else{
            weekArray.push("-");
            k++;
        }
    }
    array.push(weekArray);
 
}

/**
 * 
 */
function printCalender(){
    console.log("sun mon tue wed thu fri sat");
    for(let i=0;i<5;i++){
        var weekString=""
        for(let j=0;j<7;j++){
            if(array[i][j]!="-"){
                if(array[i][j]<10)
                weekString=weekString+"  "+array[i][j]+" ";
                else
                weekString=weekString+" "+array[i][j]+" ";
            }
            else 
            weekString=weekString+"    "
        }
        console.log(weekString);
    }
}
printCalender();
