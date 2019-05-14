/*************************************************************************************************
 *  @Purpose        : To create the JSON from Inventory Object and output the JSON String by 
                       extending the inventoryDataManagement.   
 *  @file           : inventoryextendedd.js
 *  @overview       : Create a JSON file having Inventory Details for Rice, Pulses and Wheats 
                      with properties name, weight, price per kg.Then read Json file and
                      update the jsonfile
 *  @author         : SHYAM.k
 *  @version        : V 2.0
 *  @since          : 06-05-2019
 ***************************************************************************************************/

try{    
    let inventoryutility=require('../objectOrientedPrograms/utility/inventoryextendedutil');
    let inventoryUtility=new inventoryutility();
    var readline = require('readline-sync');//read-line module for inputs
    console.log("INVENTORY MANAGEMENT");
        /**
         * @description : allowing user to enter the choice
         */
    console.log("enter the choice return the data");
    console.log("1 Rice ||2 Pulses||3 Wheats");
    var choice = readline.question("");
    choice = parseInt(choice);
    /***
     * @description :to call the main method in the program
     */
    if(!isNaN(choice)){
        inventoryUtility.inventory(choice);
    }
    else{
        console.log("please enter the numeric value for choice");
    }
}
catch(err){
    console.log(err);
}