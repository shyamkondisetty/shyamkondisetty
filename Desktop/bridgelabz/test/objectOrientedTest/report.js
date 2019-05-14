



  module.exports=  function Stockreeport(){
            /***
     * @description : reads the file system to import the util files
     */
    let fs=require('fs');
    /***
     * @description : gettting the data from the json file
     */
    var stockJson=fs.readFileSync('/home/admin6/Desktop/bridgelabz/objectOrientedPrograms/JSON/stockReport.JSON');
    var stockReport=JSON.parse(stockJson);


        /***
         * @param {*} choice
         * @description : it is used to take the particular data by using choice
         */
        this.takeChoice=function(choice){
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
        this.choiceAndBuyStocksValidation=function(choice,buystocks){
            if(this.numberValidation(choice)){
                if(this.numberValidation(buystocks)){
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
        this.numberValidation=function(number){
            number=parseInt(number);
            if(isNaN(number))
                return false;
            else{
                return true;
            }
        }
        }
        
        
        