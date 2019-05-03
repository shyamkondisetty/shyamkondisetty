let pattern = new RegExp(pattern, attributes);
let numberValid=/[0-9]/;
let nameValid=/[^a-zA-Z]/;

modeule.exports={
   

    /*checkValidations(name,fullname,mobilenumber,date){
        if(nameValidation(name)){
            if(fullnameValidation(fullname)){
                if(mobileNumberValidation(mobilenumber)){
                    if(dateValidation(date)){
                        return true;
                    }
                }
            }
        }
        
    },*/
    nameValidation(name){
        
        if(nameValid.test(name)&&name.length>3)
            return true;
        else
            return false;

    },
    fullnameValidation(fullname){
        if(nameValid.test(fullname)&&name.length>6)
            return true
        else
            return false

    },
    mobileNumberValidation(mobilenumber){
        if(numberValid.test(mobilenumber)&&mobilenumber.length==10)
            return true;
        else
            return false;
    },
    dateValidation(date){
       let date=date.split("/");
       if(date.length==3){
            if(numberValid.test(date[0])&&date[0].length<=2){
                if(numberValid.test(date[1])&&date[1].length<=2){
                    if(numberValid.test(date[2])&&date[2].length==4){
                        return true;
                    }
                    else
                        return false;
                }
                else
                    return false;
            }
            else
                return false;
            }
        else
        return false;
    }
}
