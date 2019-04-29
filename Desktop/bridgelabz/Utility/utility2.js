var utility=require("../Utility/utility");
module.exports={
    

/************************************************************************************
 * @purpose : is to to find the day of week                                         *
 * @description :it takes arguments of month and year and retuns the dayofweek for 1*
 ************************************************************************************/
    dayofweek(m,y){
    
        d=parseInt(1);
        m=parseInt(m);
        y=parseInt(y);
        var y0= y-Math.floor((14-m)/12);
        var x=y0+Math.floor(y0/4)-Math.floor(y0/100)+Math.floor(y0/400);
        var m0=m+12*Math.floor((14-m)/12)-2;
        var d0=(d+x+Math.floor((31*m0)/12))%7;
        return Math.ceil(d0);
    },

/************************************************************************************
 * @purpose : is to find the  year is leapyear or not                               *
 * @description : it takes the arguments and returns a booelan value for leapyear   *
 ************************************************************************************/
    leap(year){
   
        year=parseInt(year);
        var leapYear;
        if(year%4==0){
            if(year%100==0){
                if(year%400==0){
                    leapYear=true; 
                }  
                else{
                    leapYear=false;
                } 
            }
            else{
                leapYear=true;
            }  
        }
        else{
            leapYear=false;
        } 

        return leapYear;
    },


/************************************************************************************
 * @purpose : is to find the number of days in a month                              *
 * @description : it takes the arguments and returns the number of days in amonth   *
 ************************************************************************************/
    daysInMonth(month,year){


        switch(month){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12: return 31;

            case 4:
            case 6:
            case 9:
            case 11:return 30;
        
            case 2:
            let leapyear=this.leap(year);
                if(leapyear){
                return 29;
                }
                else{
                return 28;
                }
        }
    },

/************************************************************************************
 * @purpose : is to find the primenumbers between 1 t0 1000                         *
 * @description : it returns the array of primenumbers   between 1 to 1000          *
 ************************************************************************************/
    primesBelow1000(){
        var primes=[];
        initial=1;
        final=100;
        for(var i=0;i<10;i++){
            var array=[]
            for(var j=initial;j<=final;j++){
                var prime=utility.isPrime(j);
                if(prime==true&&j>1){
                array.push(j);
                }
            }
            primes.push(array);
            initial=initial+100;
            final=final+100;
        }
        return primes;
    },

/************************************************************************************
 * @purpose : is to convert 2d array ro 1d array for simplifiaction of calculatins  *
 * @description : returns the 1d array for an 2d array                              *
 ************************************************************************************/

    twoDtoOneD(array){
    var array1D=[];
    for(let i=0;i<array.length;i++){
        for(j=0;j<array[i].length;j++){
         array1D.push(array[i][j]);
        }
    }
    return array1D
    }
    
}
