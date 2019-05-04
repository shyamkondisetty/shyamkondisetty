let numberValid=/[0-9]/;
let nameValid=/[a-z]/;

module.exports={
   /**
    * 
    * @param {name } 
    * @param {fullname}  
    * @param {mobilenumber}  
    * @description : it checks the validation of the the inputs
    */
    checkValidations(name,fullname,mobilenumber){
        if(this.nameValidation(name)){
            if(this.fullnameValidation(fullname)){
                if(this.mobileNumberValidation(mobilenumber)){
                    return true;
                }
                else{
                    console.log("wrong mobile number input");
                    return false;
                }
            }
            else{
                console.log("wrong full name input");
                return false;
            }
        }
        else{
            console.log("wrong name input");
            return false;
        }
        
    },
    /**
     * 
     * @param {*} name
     * @description : it checks the validation by using regular expressions for name 
     */
    nameValidation(name){
        
        if(nameValid.test(name.lower)&&name.length>=3)
            return true;
        else
            return false;

    },
    /**
     * 
     * @param {*} fullname
     * @description : it checks the validation by using regular expressions for fullname 
     */
    fullnameValidation(fullname){
        if(nameValid.test(fullname.lower)&&fullname.length>=6)
            return true
        else
            return false

    },
    /**
     * 
     * @param {*} mobilenumber 
     * @description : : it checks the validation by using regular expressions for mobile number
     * 
     */
    mobileNumberValidation(mobilenumber){
        if(numberValid.test(mobilenumber)&&mobilenumber.length==10)
            return true;
        else
            return false;
    },

    /**
     * @description : it give the current date
     */
    getDate(){
        var date=new Date();
        return date.getDate()+"/" +date.getMonth()+"/"+date.getFullYear();
    }
}
