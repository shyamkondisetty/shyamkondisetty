/*************************************************************************************************
 *  @Purpose        : To create the JSON from Inventory Object and output the JSON String.     
 *  @file           : inventoryDataManagement.js
 *  @overview       : Create a JSON file having Inventory Details for Rice, Pulses and Wheats 
                      with properties name, weight, price per kg.Then read Json file and calculate 
                      value of each inventory. 
 *  @author         : SHYAM.k
 *  @version        : V 2.7
 *  @since          : 03-05-2019
 ***************************************************************************************************/

try{
    /***
     * @description : it uses to create the objrct of util class containing logic of program
     */
    let inventoryutility=require('./utility/inventoryDataManagementutil');
    let inventoryUtility=new inventoryutility();
    var readline = require('readline-sync');//read-line module for inputs
    console.log("INVENTORY MANAGEMENT");
        /**
         * @description : allowing user to enter the choice
         */
    console.log("eneter the choice return the data");
    console.log("1 Rice ||2 Pulses||3 Wheats");
    var choice = readline.question("");
    choice = parseInt(choice);
        /**
         * @param {*}  choice
         * @description : returns particular object details
         * @returns : returns the stirng form of data
         */
    console.log(inventoryUtility.inventory(choice));
}
catch(err){
    console.log(err);
}


