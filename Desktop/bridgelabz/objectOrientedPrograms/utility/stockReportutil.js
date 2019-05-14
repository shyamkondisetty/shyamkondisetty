/******************************************************************************
 *  @Purpose        : To logic for stock report is defined here    
 *  @file           : stockReportutil.js
 *  @overview       : read the data from json file and prints the stockReport
 *  @author         : SHYAM K
 *  @version        : v2.2
 *  @since          : 3/4/2019
 ******************************************************************************/
module.exports=
    function Stockreport(){
        /***
         * @description : reads the file system to import the util files
         */
        let fs=require('fs');
        /***
         * @description : gettting the data from the json file
         */
        require('');
        let stockJson=fs.readFileSync('/home/admin6/Desktop/bridgelabz/objectOrientedPrograms/JSONstockReport.JSON');
        let stockReport=JSON.parse(stockJson);

    /***
     * @param {*} choice
     * @description : it is used to take the particular data by using choice
     */
    let takeChoice=function(choice){
        choice=parseInt(choice);
            switch(choice){
                case 1:return stockReport.stocks[0];
                case 2:return stockReport.stocks[1];
                case 3:return stockReport.stocks[2];
                default:return "invalid choice"
            }
    }
    /***
     * @param {*} choice
     * @param {*} buystocks
     * @description : ith checks the validations for bth choice and buy stsocks
     */
    let choiceAndBuyStocksValidation=function(choice,buystocks){
        if(numberValidation(choice)){
            if(numberValidation(buystocks)){
                return true;
            }
            else
                return "enter numeric values to buy stocks"
        }
        else
            return "enter numeric values for choice";
    }
    /***
     * @param {*} number
     * @description : it uses to check the it is number or not 
     */
    let numberValidation=function(number){
        number=parseInt(number);
        if(isNaN(number))
            return false;
        else{
            return true;
        }
    }

    /***
     * @param {*} choice
     * @param {*} buystocks
     * @description : the complete logic of program is written here
     */
    this.stock=function(choice,buystocks){
        choice=parseInt(choice);
        buyStocks=parseInt(buystocks);
        let dataValid=choiceAndBuyStocksValidation(choice,buystocks);
        if(dataValid===true){
            let stock=takeChoice(choice);
            if(stock==="invalid choice"){
                console.log(stock);
            }
            else{
                let total = buystocks * stock.stockprice;
                if(buystocks>stock.numberofstocks){
                    console.log(stock.stockname+" has "+stock.numberofstocks+" stocks only");
                }
                else{
                console.log("one stock in " + stock.stockname + " is costs Rs." + stock.stockprice+ " and to buy " + buystocks + " shares the price is Rs." + total);

                }

            }

        }
        else{
            console.log(dataValid);
        }
      
        


    }
    
}
