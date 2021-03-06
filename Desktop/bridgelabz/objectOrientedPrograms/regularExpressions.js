/******************************************************************************
 *  @Purpose        : To Print the Modified Message with proper validation.     
 *  @file           : regularExpression.js
 *  @overview       : Read the given message then then replace the data with 
                      proper values and print modified message. 
 *  @author         : SHYAM K
 *  @version        : v2.2
 *  @since          : 3/4/2019
 ******************************************************************************/

try{
    /***
     * @description : this is used to create an object of regular expressions
     *                of util class to use the methods in it 
     */
    let regularexpressionsUtil=require('../objectOrientedPrograms/utility/regularExpressionsutil');
    let regularexpressionsutil=new regularexpressionsUtil();
    var readline=require("readline-sync");//readline module for inputs

    /***
     * @description : this is the paragraph in the form of string taken to 
     *                replace with proper inputs
     */
    var input="Hello <<name>>, We have your fullname as <<full name>> in our system. your contact number is +91­-<<mobilenumber>>.Please,let us know in case of any clarification Thank you BridgeLabz <<date>>."
    /**
     * @description : input give to name
     */
    var name=readline.question("enter name must be 3 characters\n");
    /***
     * @description : fullname of person to check the validation for graterthan six letters
     */
    var fullname=readline.question("enter the fullname must be 6 letters\n");
    /***
     * @description : mobilenumber of person to check the validation for numbervaliadtion
     *                and to replace the mobile number
     */
    var mobilenumber=readline.question("enter the mobile number must be 10 numbers\n");
    //var date=readline.question("enetr the date in format DD/MM/YYYY");
    /***
     * @param {name,fullname,mobilnumber}
     * @description : it checks the all the validations are correct as for requoirements
     *                and returns a boolean value
     */
    let result=regularexpressionsutil.checkValidations(name,fullname,mobilenumber);
    if(result){
        input=input.replace("<<name>>",name);
        input=input.replace("<<full name>>",fullname);
        input=input.replace("<<mobilenumber>>",mobilenumber);
        /***
         * @description : this line gives the current date
         */
        let date=regularexpressionsutil.getDate();
        input=input.replace("<<date>>",date);
       /***
        * @description : this line prints the modified string
        */
        console.log(input);
    }
}
catch(err){
    console.log(err);
}