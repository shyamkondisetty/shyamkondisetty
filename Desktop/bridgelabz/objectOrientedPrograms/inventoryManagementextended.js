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
    /***
     * @description : To read the file from onother directory we must import filesystem
     */
    let fs=require('fs');
    /**
     * @description : this is to create an object of utility calss 
     */
    let inventoryutility=require('./utility/inventoryDataManagementutil');
    let inventoryUtility=new inventoryutility();
    let totalObject=" { "
    /***
     * @description : this is to print the details of all inventories
     */
    for(i=1;i<=3;i++){
        if(i!=1){
            totalObject=totalObject+" , ";
        }
        let result=inventoryUtility.inventory(i);
        totalObject=totalObject+result;
    }

    totalObject=totalObject+" } "

    //totalObject=JSON.parse(totalObject);

   /***
    * @description : returns total object in the form of JSONstring
    * 
    */
    let JSONstring=JSON.stringify(totalObject,null,2);
    console.log(JSONstring);
   /***
    *@description : writing the json string into new outputfile
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