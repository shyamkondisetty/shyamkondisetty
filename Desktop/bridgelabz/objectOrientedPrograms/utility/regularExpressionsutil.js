

module.exports=function regX(){
    /***
     * @description : these are the regular expressions used for validations
     */
    let numberValid=/[0-9]/;
    let nameValid=/[a-z]/ig;
   /**
    * 
    * @param {name } 
    * @param {fullname}  
    * @param {mobilenumber}  
    * @description : it checks the validation of the the inputs
    */
    this.checkValidations=function (name,fullname,mobilenumber){
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
        
    }
    /**
     * 
     * @param {*} name
     * @description : it checks the validation by using regular expressions for name 
     */
    this.nameValidation=function(name){
        
        if(nameValid.test(name)&&name.length>=3){
            return true;}
        else{
            return false;}

    }
    /**
     * 
     * @param {*} fullname
     * @description : it checks the validation by using regular expressions for fullname 
     */
    this.fullnameValidation=function(fullname){
        if(nameValid.test(fullname)&&fullname.length>=6)
            return true
        else
            return false

    }
    /**
     * 
     * @param {*} mobilenumber 
     * @description : : it checks the validation by using regular expressions for mobile number
     * 
     */
    this.mobileNumberValidation=function (mobilenumber){
        if(numberValid.test(mobilenumber)&&mobilenumber.length==10)
            return true;
        else
            return false;
    }

    /**
     * @description : it give the current date
     */
     this.getDate=function(){
        var date=new Date();
        return date.getDate()+"/" +date.getMonth()+"/"+date.getFullYear();
    }
}
