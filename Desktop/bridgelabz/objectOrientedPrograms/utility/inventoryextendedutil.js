/*************************************************************************************************
 *  @Purpose        : To create the JSON from Inventory Object and output the JSON String by 
                       extending the inventoryDataManagement.   
 *  @file           : inventoryextendedutil.js
 *  @overview       : Create a JSON file having Inventory Details for Rice, Pulses and Wheats 
                      with properties name, weight, price per kg.Then read Json file and it updates
                      the json file
 *  @author         : SHYAM.k
 *  @version        : V 2.0
 *  @since          : 06-05-2019
 ***************************************************************************************************/

module.exports=function inventorymanagement(){
    const readline=require('readline-sync');
    const fs = require('fs');//filesystem module to get files
    var data = fs.readFileSync('/home/admin6/Desktop/bridgelabz/objectOrientedPrograms/utility/inventoryextended.json');
/***
 * @description : function JSON.parse() is used to convert the string into a JavaScript Objects
 */
var jsonData = JSON.parse(data);
    /***
 * @param {*} choice
 * @description : function inventory () is used to get the json data from objects and returning as string
 */
this.inventory=function(choice) {
    /***
     * @param {*} choice
     * @description : it gives the json file data
     * @returns : an array of inventory 
     */
    var result = takechoice(choice);
    if (result != "invalid data") {
       console.log("enter your option");
       /***
        * @description : it choses the type of update we needed in json file
        */
       console.log("1.insert\n2.delete");
       let option=readline.question("");
       /***
        * @description : it option 1 makes the output of insert the data
        */
       if(option==1){
            result.push({
                "name": readline.question("eneter the name of inventory\n"),
                "weight":readline.question("enter the weight of inventory\n"),
                "price": readline.question("enter the price of inventory\n")
            });
            console.log("inserted the inventory");
       }
       /***
        * @description : it option 2 makes the output of delete the data
        */
       else if(option==2){
        let del=0;
            for(let i=0;i<result.length;i++){
                console.log(i+":to delete "+result[i].name);
            }
            if(result.length!=0){
                 del=readline.question("");
            }
            else{
                console.log("inventory is empty");
            }
            //checking validation
            if(isnumber(del)){
                if(del>=0&&del<result.length){
                    let newarray=[]
                    let k=0
                    while(result.length!==0){
                        if(k!=del){
                            newarray.push(result[0])
                        }
                        result.shift();
                        k++;
                    }
                    console.log(newarray);
                    for(let i=0;i<newarray.length;i++){
                        result.push(newarray[i]);
                    }
                    //console.log(result);
                    console.log("deleted the inventory");
                }
                else{
                    console.log("invalid data to delete");
                }
            }
            else{
                console.log("please enter numeric value to delete");
            }
       }
       else{
           console.log("invalid option");
       }
    }
    else if (result == "invalid data") {
        console.log("invalid choice");
    }


    /***
     * @description : JSON stringify is used to convert json object to JSON string
     */
    let JSONstring=JSON.stringify(jsonData,null,2);
   /***
    *@description : writing the json string into new outputfile
    */
    fs.writeFile("inventoryextended.json", JSONstring, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
     
        console.log("JSON file has been saved.");
    });
    
}

/***
 * @param {*} choice
 * @description : function takechoice() is used to ctake choice from the user
 * @returns : returns the stocksarray of particular stock
 */
let takechoice=function(choice) {
    


        switch (choice) {
            case 1: return jsonData.Rice;
            case 2: return jsonData.Pulses;
            case 3: return jsonData.Wheats
            default: return "invalid data"

        }

}

let isnumber=function (num){
    num=parseInt(num);
    if(!isNaN(num)){
        return true;
    }
    else{
        return false;
    }
}
}