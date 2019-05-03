/*************************************************************************************************
 *  @Purpose        : To create the JSON from Inventory Object and output the JSON String by 
                       extending the inventoryDataManagement.   
 *  @file           : inventoryManagementextended.js
 *  @overview       : Create a JSON file having Inventory Details for Rice, Pulses and Wheats 
                      with properties name, weight, price per kg.Then read Json file and calculate 
                      value of each inventory. 
 *  @author         : SHYAM.k
 *  @version        : V 2.0
 *  @since          : 03-05-2019
 ***************************************************************************************************/

try{
    let fs=require('fs');
    let inventoryUtility=require('./utility/inventoryDataManagementutil');
    let totalObject=" { "
    for(i=1;i<=3;i++){
        if(i!=1){
            totalObject=totalObject+" , ";
        }
        let result=inventoryUtility.inventory(i);
        totalObject=totalObject+result;
    }

    totalObject=totalObject+" } "

    /**
    * returns total object in the form of JSONstring
    */
    let JSONstring=JSON.stringify(totalObject);
    console.log(JSONstring);
   /**
    * writing the json string into new outputfile
    */
    fs.writeFile("outputInventoryExtended.json", JSONstring, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
     
        console.log("JSON file has been saved.");
    });
}
catch(err){
    console.log(err);
}