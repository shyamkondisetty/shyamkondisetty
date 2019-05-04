let fs=require('fs');
let stockJson=fs.readFileSync('../objectOrientedPrograms/JSON/stockReport.JSON');
let stockReport=JSON.parse(stockJson);

module.exports={
    takeChoice(choice){
        choice=parseInt(choice);
            switch(choice){
                case 1:return stockReport.stocks[0];
                case 2:return stockReport.stocks[1];
                case 3:return stockReport.stocks[2];
                default:return "invalid choice"
            }
    },
    stock(choice,buystocks){
        choice=parseInt(choice);
        buyStocks=parseInt(buystocks);
        let dataValid=this.choiceAndBuyStocksValidation(choice,buystocks);
        if(dataValid===true){
            let stock=this.takeChoice(choice);
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
      
        


    },
    choiceAndBuyStocksValidation(choice,buystocks){
        if(this.numberValidation(choice)){
            if(this.numberValidation(buystocks)){
                return true;
            }
            else
                return "enter numeric values to buy stocks"
        }
        else
            return "enter numeric values for choice";
    },
    numberValidation(number){
        number=parseInt(number);
        if(isNaN(number))
            return false;
        else{
            return true;
        }
    }

}