let fs=require('fs');
var data = fs.readFileSync('../utility/stocks.JSON');
var jsonData = JSON.parse(data);
var stockArray=jsonData.stocks;

function StockAccount(filename){
        var JSONfile={mystocks:[]};
        console.log(JSONfile.mystocks);
        let report=[];
        var mystockArray=JSONfile.mystocks;
        let getStock=function(symbol){
            for(let i=0;i<stockArray.length;i++){
                if(symbol==stockArray[i].stocksymbol){
                    return stockArray[i];
                }
            }
            return "invalid symbol"
        }

        let getAllSymbol=function(){
            console.log("symbol of each stock ");
            for(let i=0;i<stockArray.length;i++){
                console.log(stockArray[i].stocksymbol);
            }
        }
        this.valueOf=function(){
            let totalValue=0;
            let mystockArray=JSONfile.mystocks;
            for(i=0;i<mystockArray.length;i++){
                totalValue=totalValue+mystockArray[i].total
            }
            return totalValue;
        }
        this.buy=function(amount,symbol){
                amount=parseInt(amount);
                if(isNaN(amount)){
                    console.log("enter numeric values for amount");
                }
                else{
                    let result=getStock(symbol);
                    if(result==="invalid symbol"){
                        console.log(result);
                        getAllSymbol();
                    }
                    else{
                        console.log(JSONfile);
                        console.log(mystockArray);
                        if(mystockArray.length===0){
                            let obj={
                                "stocksymbol":symbol,
                                "stockname":result.stockname,
                                "numberofstocks":(amount/result.stockprice),
                                "total":amount
                            }
                            report.push("purchased the "+result.stockname+" shares for "+amount+" rupees");
                            mystockArray.push(obj);
                            console.log(mystockArray.length);
                        }
                        else{
                            console.log("second");
                            for(i=0;i<=mystockArray.length-1;i++){
                                console.log(i);
                                if(mystockArray[i].stocksymbol===symbol){
                                    console.log("equal1");
                                    let obj={
                                        "stocksymbol":symbol,
                                        "stockname":result.stockname,
                                        "numberofstocks":mystockArray[i].numberofstocks+(amount/result.stockprice),
                                        "total":mystockArray[i].total+amount
                                    }
                                    report.push("purchased the "+mystockArray[i].stockname+" shares for "+amount+" rupees");
                                    mystockArray[i]=obj;
    
                                }
                                else if(i===(mystockArray.length-1)&&mystockArray[i].stocksymbol!==symbol){
                                    console.log(i);
                                    let obj={
                                        "stocksymbol":symbol,
                                        "stockname":result.stockname,
                                        "numberofstocks":(amount/result.stockprice),
                                        "total":amount
                                    }
                                    report.push("purchased the "+result.stockname+" shares for "+amount+" rupees");
                                    mystockArray.push(obj);
                                }
                             
                            }
                        }
                    }
                }
            
        }
        this.sell=function(amount,symbol){
            amount=parseInt(amount);
            if(isNaN(amount)){
                console.log("enter numeric values for amount");
            }
            else{
                let result=getStock(symbol);
                if(result==="invalid symbol"){
                    console.log(result);
                    getAllSymbol();
                }
                else{
                    let mystockArray=JSONfile.mystocks;
                    console.log(mystockArray);
                    if(mystockArray.length==0){
                        console.log("no stocks are available for selling");
                    }
                    else{
                        for(i=0;i<mystockArray.length;i++){
                            if(mystockArray[i].symbol===symbol){
                                let obj={
                                    "stocksymbol":symbol,
                                    "stockname":result.stockname,
                                    "numberofstocks":mystockArray[i].numberofstocks-(amount/result.stockprice),
                                    "total":mystockArray[i].total-amount
                                }
                                if(mystockArray[i].total-amount>=0){
                                    report.push("sell the "+mystockArray[i].stockname+" shares for "+amount+" rupees");
                                    mystockArray[i]=obj
                                }
                                else{
                                    console.log("the total amount of this stock is :"+mystockArray[i].total);
                                }
                            }
                            else if(i==mystockArray.length-1&&mystockArray[i].symbol!==symbol){
                                console.log("no stocks are available for selling");
                            }
                         
                        }
                    }
                }
            }
        }
        this.save=function(){
            JSONfile=JSON.stringify(JSONfile)
            filename=filename+".JSON"
            fs.writeFile(filename, JSONfile, 'utf8', function (err) {
                if (err) {
                    console.log("An error occured while writing JSON Object to File.");
                    return console.log(err);
                }
             
                console.log("JSON file has been updated and saved.");
            })
        }
        this.printReport=function(){
            for(let i=0;i<report.length;i++){
                console.log(report[i]);
            }
        }
    }


const st=new StockAccount("shyam");
st.buy(10000,"hdfc");
st.buy(1000,"icic");