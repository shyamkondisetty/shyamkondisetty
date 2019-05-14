/******************************************************************************
 *  @Purpose        : To Print the the stock report of stocks     
 *  @file           : stockReport.js
 *  @overview       : read the data from json file and prints the stockReport
 *  @author         : SHYAM K
 *  @version        : v2.2
 *  @since          : 6/4/2019
 ******************************************************************************/

try{
    var readline=require('readline-sync');//readline module
    /***
     * @description : it is used to get the functions from the util class by creating object
     */
    let stockReportutil=require('../objectOrientedPrograms/utility/stockReportutil');
    let stockReportUtil=new stockReportutil();
    /***
     * @description : it allows the user to buythe stocks by giving choices
     */
    console.log("enter the choice of your company\n1.HDFC BANK\n2.ICIC BANK\n3.Goldmansachs bank");
    let choice=readline.question("");
    /***
     * @description : it allows to  read the number of stocks to buy 
     */
    let buystocks=readline.question("enter the number of stocks to buy\n");
    choice=parseInt(choice);
    buystocks=parseInt(buystocks);
    /***
     * @param {*} choice
     * @param {*} buystocks
     * @description : it gives the output of your stocks that you buy
     */
    stockReportUtil.stock(choice,buystocks);

}
catch(err){
    console.log(err);
}
