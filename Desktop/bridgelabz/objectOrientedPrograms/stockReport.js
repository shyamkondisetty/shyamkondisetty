try{
    var readline=require('readline-sync');
    let stockReportUtil=require('../objectOrientedPrograms/utility/stockReportutil');
    console.log("enter the choice of your company\n1.HDFC BANK\n2.ICIC BANK\n3.Goldmansachs bank");
    let choice=readline.question("");
    let buystocks=readline.question("enter the number of stocks to buy\n");
    choice=parseInt(choice);
    buystocks=parseInt(buystocks);
    stockReportUtil.stock(choice,buystocks);

}
catch(err){
    console.log(err);
}
